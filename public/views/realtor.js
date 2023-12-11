import "../components/counter.js";
import { getInterests, getAllResidences } from "./server-request.js";

export default async () => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "true";

  if (!isAuthenticated) {
    return `<p>Du måste vara inloggad som mäklare för att se denna sida.</p>`;
  }

  try {
    const interests = await getInterests();
    const residences = await getAllResidences();

    const interestsByResidence = interests.reduce((acc, interest) => {
      (acc[interest.residenceId] = acc[interest.residenceId] || []).push(interest);
      return acc;
    }, {});

    const residencesWithInterests = residences.filter(residence => interestsByResidence[residence.id]);

    const residencesHtml = residencesWithInterests.map(residence => {
      const residenceInterests = interestsByResidence[residence.id];
      const interestsHtml = residenceInterests.map(interest => `
      <li><strong>Namn:</strong> ${interest.nameInterest} <strong>Telefon:</strong> ${interest.phoneInterest} <strong>Epost:</strong> ${interest.emailInterest}</li>
      `).join('');

      return `
        <div>
          <h3>${residence.address}</h3>
          <ul>${interestsHtml}</ul>
        </div>
      `;
    }).join('');

    return `
      <h2>Mäklarsidan</h2>
      <p>Välkommen mäklare!</p>
      ${residencesHtml}
    `;
  } catch (error) {
    console.error('Fel vid hämtning av data:', error);
    return `<p>Ett fel uppstod vid hämtning av data.</p>`;
  }
};
