import "../components/counter.js";
import { postResidence } from "./server-request.js";

export async function submitResidence() {
  let address = document.getElementById('address').value;
  let type = document.getElementById('type').value;
  let floor = document.getElementById('floor').value;
  let rooms = document.getElementById('rooms').value;
  let size = document.getElementById('size').value;
  let price = document.getElementById('price').value;
  let yearBuilt = document.getElementById('yearBuilt').value;
  let balcony = document.getElementById('balcony').value;
  let storage = document.getElementById('storage').value;
  let parking = document.getElementById('parking').value;
  let courtyard = document.getElementById('courtyard').value;
  let patio = document.getElementById('patio').value;
  let imageURL = document.getElementById('image-url').value;
  let additionalInfo = document.getElementById('additional-info').value;

  if (
    address === '' ||
    rooms === '' ||
    size === '' ||
    price === ''
  ) {
    alert('Fyll i alla obligatoriska fält!');
    return;
  }

  let formData = {
    address: address,
    type: type,
    floor: floor,
    rooms: rooms,
    size: size,
    price: price,
    yearBuilt: yearBuilt,
    balcony: balcony,
    storage: storage,
    parking: parking,
    courtyard: courtyard,
    patio: patio,
    imageURL: [imageURL],
    additionalInfo: additionalInfo
  };

  await postResidence(formData);
  console.log('Bostad inskickad!');
  alert("Din bostad har skickats in!");
  return;
}

export default () => /*html*/`
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
        <label for="floor">Våning:</label>
        <input type="text" id="floor" name="floor">
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
        <label for="yearBuilt">Byggnadsår:</label>
        <input type="number" id="yearBuilt" name="yearBuilt" min="1" required>
      </div>
      <div>
        <label for="balcony">Balkong:</label>
        <select id="balcony" name="balcony">
          <option value="Ja">Ja</option>
          <option value="Nej">Nej</option>
        </select>
      </div>
      <div>
        <label for="storage">Förråd:</label>
        <select id="storage" name="storage">
          <option value="Ja">Ja</option>
          <option value="Nej">Nej</option>
        </select>
      </div>
      <div>
        <label for="parking">Parkering:</label>
        <select id="parking" name="parking">
          <option value="Ja">Ja</option>
          <option value="Nej">Nej</option>
        </select>
      </div>
      <div>
        <label for="courtyard">Innergård:</label>
        <select id="courtyard" name="courtyard">
          <option value="Ja">Ja</option>
          <option value="Nej">Nej</option>
        </select>
      </div>
      <div>
        <label for="patio">Uteplats:</label>
        <select id="patio" name="patio">
          <option value="Ja">Ja</option>
          <option value="Nej">Nej</option>
        </select>
      </div>
      <div>
        <label for="image-url">Bild-URL:</label>
        <input type="url" id="image-url" name="image-url" placeholder="Ange URL för bilden på din bostad">
      </div>
      <div>
        <label for="additional-info">Ytterligare information:</label>
        </br>
        <textarea id="additional-info" name="additional-info"></textarea>
      </div>
      <button type="button" onclick="submitResidence()">Skicka in</button>
    </form>
  </div>
`;