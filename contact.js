function contactHF() {
  
  var content = {

    '#about': `
 <section id="brokers">
  <h2 class="ingress"></h2>

    <div id="dealers">
      <!-- Mäklare 1 -->
      <div class="dealer">
        <img src="./kontakt/image/dealer.jpg" alt="Stig Insides" class="dealer-img">
        <h3>Stig Insides</h3>
        <p class="role">Auktoriserad bostadsmäklare</p>
        <p><a href="mailto:stig.insides@homefinder.se?subject=Förfrågan om bostadsaffär">Maila mäklaren direkt!</a></p>
        <p><a href="tel:+46 8 123 45 67">Ring mig: 08-123 45 67</a></p>
      </div>
      <!-- Mäklare 2 -->
      <div class="dealer">
        <img src="./kontakt/image/dealer2.jpg" alt="Forentia Zales" class="dealer-img">
        <h3>Forentia Zales</h3>
        <p class="role">Auktoriserad bostadsmäklare</p>
        <p><a href="mailto:forentia.zales@homefinder.se?subject=Förfrågan om bostadsaffär">Maila mäklaren direkt!</a></p>
        <p><a href="tel:+46 8 123 45 67">Ring mig: 08-123 45 67</a></p>
      </div>
      <!-- Mäklare 3 -->
      <div class="dealer">
        <img src="./kontakt/image/dealer3.jpg" alt="Tille Salusson" class="dealer-img">
        <h3>Tille Salusson</h3>
        <p class="role">Auktoriserad bostadsmäklare</p>
        <p><a href="mailto:tille.salusson@homefinder.se?subject=Förfrågan om bostadsaffär">Maila mäklaren direkt!</a></p>
        <p><a href="tel:+46 8 123 45 67">Ring mig: 08-123 45 67</a></p>
      </div>

    </div>

 </section>

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