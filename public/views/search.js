import "../components/counter.js";
import { getAllResidences } from "./server-request.js";

let minPrice = null;
let maxPrice = null;

function updatePriceRange() {
  minPrice = document.getElementById('minPrice').value;
  maxPrice = document.getElementById('maxPrice').value;
}

function renderResidenceDetails(residence) {
  let imagesHtml = '';
  if (Array.isArray(residence.imageURL) && residence.imageURL.length > 1) {

    imagesHtml = `
      <div class="carousel">
        ${residence.imageURL.map(url => `<img src="${url}" alt="Bild på bostaden" class="residence-image" style="display: none;">`).join('')}
        <button class="left-arrow" onclick="moveSlide(-1)">&#10094;</button>
        <button class="right-arrow" onclick="moveSlide(1)">&#10095;</button>
      </div>
    `;
  } else {

    imagesHtml = residence.imageURL ? `<img src="${residence.imageURL}" alt="Bild på bostaden" class="residence-image">` : '';
  }

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
    <p>Bilder:${imagesHtml}</p>
    <p>${residence.additionalInfo}</p>
  `;
}

export default async () => {
  try {
    const residencesData = await getAllResidences();

    const residencesList = residencesData.map(residence =>
      `<li onclick="showResidenceDetails(${residence.id})">${residence.address}</li>`
    ).join('');

    return `
<h2>Alla Bostäder:</h2>
<div class="filterResidence">
  <label for="sortOrder">Sortera efter:</label>
  <select id="sortOrder">
    <option value="priceAsc">Pris (Lägst överst)</option>
    <option value="priceDesc">Pris (Högst överst)</option>
    <option value="sizeAsc">Storlek (Minst överst)</option>
    <option value="sizeDesc">Storlek (Störst överst)</option>
  </select>

  <label for="residenceType">Bostadstyp:</label>
  <select id="residenceType">
    <option value="all">Alla</option>
    <option value="Villa">Villa</option>
    <option value="Fritidshus">Fritidshus</option>
    <option value="Lägenhet">Lägenhet</option>
    <option value="Radhus">Radhus</option>
  </select>

  <button onclick="filterResidences()">Filtrera</button>
</div>

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
  initCarousel();
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

window.moveSlide = function (direction) {
  const slides = document.querySelectorAll('.residence-image');
  showSlide(currentSlide + direction, slides);
};
let currentSlide = 0;

function showSlide(index, slides) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach(slide => slide.style.display = "none");
  slides[currentSlide].style.display = "block";
}

function initCarousel() {
  const slides = document.querySelectorAll('.residence-image');
  if (slides.length > 0) {
    showSlide(0, slides);
  }
}

window.filterResidences = async function () {
  try {
    const sortOrder = document.getElementById('sortOrder').value;
    const residenceType = document.getElementById('residenceType').value;
    let residencesData = await getAllResidences();

    // filtrera bostad om något valt
    if (residenceType !== 'all') {
      residencesData = residencesData.filter(residence => residence.type === residenceType);
    }

    switch (sortOrder) {
      case 'priceAsc':
        residencesData.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        residencesData.sort((a, b) => b.price - a.price);
        break;
      case 'sizeAsc':
        residencesData.sort((a, b) => a.size - b.size);
        break;
      case 'sizeDesc':
        residencesData.sort((a, b) => b.size - a.size);
        break;
      default:
        // inget valt, gör inget
        break;
    }

    const residencesList = residencesData.map(residence =>
      `<li onclick="showResidenceDetails(${residence.id})">${residence.address}</li>`
    ).join('');

    // uppdatera med filtrerade bostäder
    const residencesContainer = document.querySelector('ul');
    residencesContainer.innerHTML = residencesList;

  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}
