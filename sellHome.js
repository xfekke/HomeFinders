function sellResidence() {
  console.log('Klickade "Sälja Bostad"');
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
              <div id="floorOption">
                <label for="floor">Våning:</label>
                <select id="floor" name="floor">
                  <option value="none">Ingen</option>
                  <option value="BV">BV</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
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
                 <label for="balcony">Balkong:</label>
                  <select id="balcony" name="balcony">
                      <option value="Ja">Ja</option>
                      <option value="Nej">Nej</option>
                  </select>
                  <div>
                  <div>
                  <label for="patio">Uteplats:</label>
                  <select id="patio" name="patio">
                      <option value="Ja">Ja</option>
                      <option value="Nej">Nej</option>
                  </select>
                  </div>
                  <label for="image-url">Bild-URL:</label>
                  <input type="url" id="image-url" name="image-url" placeholder="Ange URL för bilden på din bostad">
              </div>

              <div>
                  <label for="additional-info">Ytterligare information:</label>
                  <textarea id="additional-info" name="additional-info"></textarea>
              </div>
              <button type="button" onclick="submitResidence()">Skicka in</button>
          </form>
      </div>
    `
  };


  return content;
}

// function toggleFloorOptions() {
//   document.getElementById('type').addEventListener('change', toggleFloorOptions);
//   var type = document.getElementById('type').value;
//   var floorOptions = document.getElementById('floorOptions');

//   if (type === 'lägenhet') {
//     floorOptions.style.display = 'block';
//   } else {
//     floorOptions.style.display = 'none';
//   }
// }

//submitResidence knapp

function updateContent() {
  var hash = location.hash;
  var appContainer = document.getElementById('app');

  if (hash in sellResidence()) {
    appContainer.innerHTML = sellResidence()[sell];
  } else {
    console.log('Hashen matchar ingen giltig SPA-funktion.');
  }
}

function submitResidence() {
  var address = document.getElementById('address').value;
  var type = document.getElementById('type').value;
  var floor = document.getElementById('floor').value;
  var rooms = document.getElementById('rooms').value;
  var size = document.getElementById('size').value;
  var price = document.getElementById('price').value;
  var balcony = document.getElementById('balcony').value;
  var patio = document.getElementById('patio').value;
  var imageURL = document.getElementById('image-url').value;
  var additionalInfo = document.getElementById('additional-info').value;

  if (
    address === '' ||
    rooms === '' ||
    size === '' ||
    price === ''
  ) {
    alert('Fyll i alla obligatoriska fält!');
    return
  }

  var formData = {
    address: address,
    type: type,
    floor: floor,
    rooms: rooms,
    size: size,
    price: price,
    balcony: balcony,
    patio: patio,
    imageURL: imageURL,
    additionalInfo: additionalInfo
  };

  console.log(formData);
}


