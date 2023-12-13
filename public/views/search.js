import "../components/counter.js";
import { getAllResidences } from "./server-request.js";

let lastFilteredResidences = null;
let lastSortOrder = 'priceAsc';
let lastResidenceType = 'all';

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
    imagesHtml = residence.imageURL ? `<img src="${residence.imageURL}" alt="Bild på bostaden" class="residence-image">` : 'Bilder laddas upp senare!';
  }

  return `
    <div class="residence-info">
      <button onclick="backToFilteredResidences()">Tillbaka till Filtrerade</button>
      <button onclick="backToAllResidences()">Tillbaka till Alla Bostäder</button>
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
          <input type="text" id="nameInterest-${residence.id}" placeholder="Namn">
          <input type="tel" id="phoneInterest-${residence.id}" placeholder="Telefonnummer" pattern="[0-9]+" title="Endast siffror är tillåtna">
          <input type="email" id="emailInterest-${residence.id}" placeholder="E-postadress">
          <button onclick="submitInterest(${residence.id})">Skicka</button>
      </div>
    </div>  
  `;
}

export default async function renderResidencesList() {
  try {
    const residencesData = await getAllResidences();
    lastFilteredResidences = residencesData;

    const residencesList = residencesData.map(residence =>
      `<li class="residence-item" onclick="showResidenceDetails(${residence.id})">
     <img src="${residence.imageURL.length > 0 ? residence.imageURL[0] : 'https://i.ibb.co/WsrBLMf/hf-logo.png'}" alt="Preview of ${residence.address}" class="residence-preview-image">
    <div class="residence-details">
    <h3>${residence.address}</h3>
    <p>Pris: ${residence.price} kr</p>
    <p>Storlek: ${residence.size} kvm</p>
    </div>
  </li>`
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
        </br>
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

window.backToFilteredResidences = async () => {
  if (lastFilteredResidences) {
    const residencesList = lastFilteredResidences.map(residence =>
      `<li class="residence-item" onclick="showResidenceDetails(${residence.id})">
     <img src="${residence.imageURL.length > 0 ? residence.imageURL[0] : 'https://i.ibb.co/WsrBLMf/hf-logo.png'}" alt="Preview of ${residence.address}" class="residence-preview-image">
    <div class="residence-details">
    <h3>${residence.address}</h3>
    <p>Pris: ${residence.price} kr</p>
    <p>Storlek: ${residence.size} kvm</p>
    </div>
  </li>`
    ).join('');

    document.getElementById("app").innerHTML = `
      <h2 class="searchTitle">Filtrerade Bostäder:</h2>
      <div class="filterResidence">
        <label for="sortOrder">Sortera efter:</label>
        <select id="sortOrder" value="${lastSortOrder}">
          <option value="priceAsc">Pris (Lägst överst)</option>
          <option value="priceDesc">Pris (Högst överst)</option>
          <option value="sizeAsc">Storlek (Minst överst)</option>
          <option value="sizeDesc">Storlek (Störst överst)</option>
        </select>

        <label for="residenceType">Bostadstyp:</label>
        <select id="residenceType" value="${lastResidenceType}">
          <option value="all">Alla</option>
          <option value="Villa">Villa</option>
          <option value="Fritidshus">Fritidshus</option>
          <option value="Lägenhet">Lägenhet</option>
          <option value="Radhus">Radhus</option>
        </select>

        <button onclick="filterResidences()">Filtrera</button>
      </div>
      <ul class="residencesList">${residencesList}</ul>
    `;
  } else {
    backToAllResidences();
  }
};
window.backToAllResidences = async () => {
  document.getElementById("app").innerHTML = await renderResidencesList();
};

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

    lastFilteredResidences = residencesData;

    const residencesList = residencesData.map(residence =>
      `<div class="residences-container">
      <li class="residence-item" onclick="showResidenceDetails(${residence.id})">
     <img src="${residence.imageURL.length > 0 ? residence.imageURL[0] : 'https://i.ibb.co/WsrBLMf/hf-logo.png'}" alt="Preview of ${residence.address}" class="residence-preview-image">
    <div class="residence-details">
    <h3>${residence.address}</h3>
    <p>Pris: ${residence.price} kr</p>
    <p>Storlek: ${residence.size} kvm</p>
    </div>
  </li>
  </div>
  `

    ).join('');

    const residencesContainer = document.querySelector('.residencesList');
    residencesContainer.innerHTML = residencesList;

  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}

window.toggleInterestForm = function (residenceId) {
  const form = document.getElementById(`interestForm-${residenceId}`);
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

function validatePhone(phone) {
  const re = /^[0-9]+$/;
  return re.test(phone);
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

window.submitInterest = async function (residenceId) {
  const nameInterest = document.getElementById(`nameInterest-${residenceId}`).value;
  const phoneInterest = document.getElementById(`phoneInterest-${residenceId}`).value;
  const emailInterest = document.getElementById(`emailInterest-${residenceId}`).value;

  if (!validatePhone(phoneInterest)) {
    alert("Ange ett giltigt telefonnummer (endast siffror).");
    return;
  }

  if (!validateEmail(emailInterest)) {
    alert("Ange en giltig e-postadress.");
    return;
  }

  try {
    const response = await fetch('/interests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ residenceId, nameInterest, phoneInterest, emailInterest }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Intresseanmälan skickad', data);
    alert("Din intresseanmälan har skickats!");
  } catch (error) {
    console.error('Ett fel uppstod vid skickning av intresseanmälan:', error);
    alert("Ett fel uppstod vid skickning av din intresseanmälan.");
  }
};