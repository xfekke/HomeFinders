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
  let thumbnailsHtml = '';

  if (Array.isArray(residence.imageURL) && residence.imageURL.length > 1) {
    imagesHtml = `
      <div class="carousel">
        ${residence.imageURL.map(url => `<img src="${url}" alt="Bild på bostaden" class="residence-image" style="display: none;">`).join('')}
        <button class="left-arrow" onclick="moveSlide(-1)">&#10094;</button>
        <button class="right-arrow" onclick="moveSlide(1)">&#10095;</button>
      </div>
    `;
    thumbnailsHtml = `
      <div class="thumbnails">
        ${residence.imageURL.map((url, index) => `<img src="${url}" alt="Thumbnail" class="thumbnail" onclick="changeSlide(${index})">`).join('')}
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
    ${thumbnailsHtml}
    <p>${residence.additionalInfo}</p>
    <button onclick="toggleInterestForm(${residence.id})">Intresseanmälan</button>
    <div id="interestForm-${residence.id}" class="interest-form" style="display:none;">
        <input type="text" id="name-${residence.id}" placeholder="Ditt namn">
        <input type="text" id="phone-${residence.id}" placeholder="Ditt telefonnummer">
        <input type="email" id="email-${residence.id}" placeholder="Din e-postadress">
        <button onclick="submitInterest(${residence.id})">Skicka</button>
    </div>
  `;
}

export default async function () {
  try {
    const residencesData = await getAllResidences();

    const residencesList = residencesData.map(residence =>
      `<li onclick="showResidenceDetails(${residence.id})">${residence.address}</li>`
    ).join('');

    return `
      <h2 class="searchTitle">Alla Bostäder:</h2>
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

      <ul class="residencesList">
        ${residencesList}
      </ul>
    `;
  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}

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

window.changeSlide = function (index) {
  const slides = document.querySelectorAll('.residence-image');
  showSlide(index, slides);
};

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
    }

    const residencesList = residencesData.map(residence =>
      `<li onclick="showResidenceDetails(${residence.id})">${residence.address}</li>`
    ).join('');

    const residencesContainer = document.querySelector('.residencesList');
    residencesContainer.innerHTML = residencesList;

  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}

window.toggleInterestForm = function(residenceId) {
  const form = document.getElementById(`interestForm-${residenceId}`);
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

window.submitInterest = async function(residenceId) {
  const name = document.getElementById(`name-${residenceId}`).value;
  const phone = document.getElementById(`phone-${residenceId}`).value;
  const email = document.getElementById(`email-${residenceId}`).value;

  try {
    const response = await fetch('http://localhost:3000/interests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ residenceId, name, phone, email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Intresseanmälan skickad', data);
  } catch (error) {
    console.error('Ett fel uppstod vid skickning av intresseanmälan:', error);
  }
};
