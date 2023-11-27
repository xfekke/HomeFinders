function sellResidence() {
  var content = {
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

function submitResidence() {
  console.log('Formulär skickat!');
}

var hash = location.hash;

if (hash === '#sell') {
  // #visa sell sidan
  var appContainer = document.getElementById('app');
  appContainer.innerHTML = sellResidence()['#sell'];
}

function navigateTo(viewId) {
  location.hash = viewId;
}

window.onhashchange = updateContent;

document.addEventListener('DOMContentLoaded', updateContent);

function updateContent() {
  // 
}