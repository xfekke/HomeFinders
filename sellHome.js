function sellResidence() {
  console.log('Klickade "Sälja Bostad"');
  var content = {
    '#home': `
      <div class="home-container">
        <h2>Hem</h2>
        <!-- Innehåll för startsidan -->
      </div>
    `,

    '#sell': `
    <div class="sell-container">
      
      <h2>Sälja Bostad</h2>
          <p>Fyll i formuläret för att börja processen att sälja din bostad.</p>
          <form id="sell-form">
              <div>
                  <label for="address">Adress:</label>
                  <input type="text" id="address" name="address" required>
              </div>
              <div>
                  <label for="type">Bostadstyp:</label>
                  <select id="type" name="type">
                      <option value="lägenhet">Lägenhet</option>
                      <option value="villa">Villa</option>
                      <option value="radhus">Radhus</option>
                      <option value="fritidshus">Fritidshus</option>
                  </select>
              </div>
              <div>
                  <label for="rooms">Antal rum:</label>
                  <input type="number" id="rooms" name="rooms" min="1" required>
              </div>
              <div>
                  <label for="size">Storlek (kvm):</label>
                  <input type="number" id="size" name="size" required>
              </div>
              <div>
                  <label for="price">Utgångspris:</label>
                  <input type="number" id="price" name="price" required>
              </div>
              <div>
                  <label for="additional-info">Ytterligare information:</label>
                  <textarea id="additional-info" name="additional-info"></textarea>
              </div>
              <button type="submitResidence">Skicka in</button>
          </form>
      </div>
    `
  };
  return content;
}

//submitResidence knapp

function updateContent() {
  var hash = location.hash;
  var appContainer = document.getElementById('app');

  if (hash in sellResidence()) {
    appContainer.innerHTML = sellResidence()[hash];
  } else {
    console.log('Hashen matchar ingen giltig SPA-funktion.');
  }
}

function submitResidence() {
  console.log('Formulär skickat!');
}

function navigateTo(viewId, event) {
  event.preventDefault();
  location.hash = viewId;
}


// uppdaterar sidan nör den laddas
document.addEventListener('DOMContentLoaded', function () {
  updateContent();
});

window.onhashchange = updateContent;

