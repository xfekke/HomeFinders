function contactHF() {
  
  var content = {

    '#about': `
  <section class="form-section">
       <p class="ingress">Du kan också skicka e-post till oss via formuläret</p>
    <form action="">
      <input type="email" id="email" placeholder="Ange e-postadress" name="email" required=true;>
      <input type="text" id="notation" placeholder="Ärende" name="notation" required=true;>
      <input type="text" id="message" placeholder="Skriv in ditt meddelande" name="message" required=true;>
      <button id="form-btn">Skicka meddelandet</button>
    </form>
  </section>
    `
  }
  return content;
}