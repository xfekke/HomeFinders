import "../components/counter.js";
import { getAllResidences, printAllResidences } from "./server-request.js";

// export default async () => {
//     const residencesData = await getAllResidences();
//     console.log(residencesData);

//     const residencesList = residencesData.map(residence => `<li>${residence.adress}</li>`).join('');

//     const searchContainer = `
//       <h2>Alla Residences</h2>
//       <ul>
//         ${residencesList}
//       </ul>
//       <h2>Välkommen till Homefinders</h2>
//       <p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>
//     `;
//     console.log(searchContainer);
//     return searchContainer;
// };

export default async () => {
    try {
        const residencesData = await getAllResidences();
        console.log("residencesData:", residencesData);

        const residencesList = residencesData.map(residence => `<li>${residence.address}</li>`).join('');

        const searchContainer = `
          <h2>Alla Bostäder:</h2>
          <ul>
            ${residencesList}
          </ul>
          <h2>Välkommen till Homefinders</h2>
          <p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>
        `;
        console.log(searchContainer);
        return searchContainer;
    } catch (error) {
        console.error("Error fetching residences data:", error);
        // hantering av fel här;
        return "Det uppstod ett fel vid hämtning av bostadsdata.";
    }
};