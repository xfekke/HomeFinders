import "../components/counter.js";
import { getAllResidences } from "./server-request.js";

function renderResidenceDetails(residence) {
  return `
    <h3>${residence.address}</h3>
    <p>Typ: ${residence.type}</p>
    <p>Antal rum: ${residence.rooms}</p>
    <p>Storlek: ${residence.size} kvm</p>
    <p>Pris: ${residence.price} kr</p>
    <p>Byggår: ${residence.yearBuilt}</p>
    <p>Balkong: ${residence.balcony}</p>
    <p>Förråd: ${residence.storage}</p>
    <p>Parkering: ${residence.parking}</p>
    <p>Innergård: ${residence.courtyard}</p>
    <p>Uteplats: ${residence.patio}</p>
    <img src="${residence.imageURL}" alt="Bild på bostaden">
    <p>${residence.additionalInfo}</p>
  `;
}

export default async () => {
<<<<<<< HEAD
  try {
    const residencesData = await getAllResidences();

    const residencesList = residencesData.map(residence => 
      `<li onclick="showResidenceDetails(${residence.id})">${residence.address}</li>`
    ).join('');
=======
    try {
        const residencesData = await getAllResidences();
        console.log("residencesData:", typeof residencesData);

        const residencesList = residencesData.map(residence => `<li>${residence.address}${residence.price}</li>`).join('');
>>>>>>> 8636ca165fcd253e7eb3ca2e77b63c161b2e4e8d

    return `
      <h2>Alla Bostäder:</h2>
      <ul>
        ${residencesList}
      </ul>
    `;
  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
};

window.showResidenceDetails = async (residenceId) => {
  const residence = await getResidenceById(residenceId);
  document.getElementById("app").innerHTML = renderResidenceDetails(residence);
};

async function getResidenceById(id) {
  try {
    const response = await fetch(`/residences/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching residence:', error);
    return null;
  }
}
