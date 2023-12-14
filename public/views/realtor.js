import "../components/counter.js";
import { getInterests, getAllResidences, updateInterestStatus } from "./server-request.js";

//funktion: markera intresseanmälning som kontaktad av mäklare
window.markAsContacted = async (interestId, residenceAddress) => {
  try {
    //uppdatera intresseanmälan till "kontaktad"
    await updateInterestStatus(interestId, true);
    const interestElement = document.getElementById(`interest-${interestId}`);
    const contactedInterestsList = document.getElementById('contactedInterestsList');
    let residenceListItem = contactedInterestsList.querySelector(`li[data-residence='${residenceAddress}']`);

    //om lista ej finns så skapas bostadslista
    if (!residenceListItem) {
      residenceListItem = document.createElement('li');
      residenceListItem.setAttribute('data-residence', residenceAddress);
      residenceListItem.innerHTML = `<h3>${residenceAddress}</h3><ul></ul>`;
      contactedInterestsList.appendChild(residenceListItem);
    }

    //flytta itnresseanmälan till kontaktad och tar bort kontaktad knapp/avmarkerar
    residenceListItem.querySelector('ul').appendChild(interestElement);

    //funktion för att ta bort knapp när intresseanmälning ej är aktiv/är kontaktad
    const contactButton = interestElement.querySelector('button');
    if (contactButton) {
      contactButton.remove();
    }

    //kontroll att de inte finns fler intresseanmälningar för bostad
    const activeInterestsList = document.getElementById('activeInterestsList');
    const activeResidenceListItem = activeInterestsList.querySelector(`li[data-residence='${residenceAddress}']`);
    if (activeResidenceListItem && activeResidenceListItem.querySelectorAll('.interest').length === 0) {
      activeResidenceListItem.remove();
    }
  } catch (error) {
    console.error('Fel vid uppdatering av intresseanmälan:', error);
  }
};

//exportera funktion till html SPA
export default async () => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "true";

  //visa meddelande om användare ej är inloggad
  if (!isAuthenticated) {
    return `<p>Du måste vara inloggad som mäklare för att se denna sida.</p>`;
  }

  try {

    //hämtar data från db.json
    const interests = await getInterests();
    const residences = await getAllResidences();

    //gör html-string för aktiva och kontaktade intresseanmälningar
    let activeInterestsHtml = '';
    let contactedInterestsHtml = '';

    residences.forEach(residence => {
      const residenceInterests = interests.filter(interest => interest.residenceId === residence.id);
      let activeInterests = residenceInterests.filter(interest => !interest.contacted);
      let contactedInterests = residenceInterests.filter(interest => interest.contacted);

      //gör html-string för aktiva intressen som kan avmarkeras
      if (activeInterests.length > 0) {
        let interestsHtml = activeInterests.map(interest => `
          <li id="interest-${interest.id}" class="interest">
            <strong class="name">Namn:</strong> ${interest.nameInterest}
            <strong class="phone">Telefon:</strong> ${interest.phoneInterest}
            <strong class="email">Epost:</strong> ${interest.emailInterest}
            <button onclick="markAsContacted(${interest.id}, '${residence.address}')">Kontaktad</button>
          </li>
        `).join('');

        //aktiva intressen som syns i html
        activeInterestsHtml += `
          <li data-residence="${residence.address}">
            <h3><u>${residence.address}</u></h3>
            <ul>${interestsHtml}</ul>
          </li>
        `;
      }

      //html-string för kontaktade
      if (contactedInterests.length > 0) {
        let interestsHtml = contactedInterests.map(interest => `
          <li>
            <strong>Namn:</strong> ${interest.nameInterest}
            <strong>Telefon:</strong> ${interest.phoneInterest}
            <strong>Epost:</strong> ${interest.emailInterest}
          </li>
        `).join('');

        //kontaktade/ej aktiva intressen som syns i html
        contactedInterestsHtml += `
          <li data-residence="${residence.address}">
            <h3><u>${residence.address}</u></h3>
            <ul>${interestsHtml}</ul>
          </li>
        `;
      }
    });

    //html view
    return `
      <div id="realtorPage">
        <h2>Mäklarsidan</h2>
        <p>Välkommen mäklare!</p>
        <h3>Aktiva intresseanmälningar:</h3>
        <ul id="activeInterestsList">${activeInterestsHtml}</ul>
        <h3>Kontaktade intressenter:</h3>
        <ul id="contactedInterestsList">${contactedInterestsHtml}</ul>
      </div>
    `;
  } catch (error) {
    console.error('Fel vid hämtning av data:', error);
    return `<p>Ett fel uppstod vid hämtning av data.</p>`;
  }
};