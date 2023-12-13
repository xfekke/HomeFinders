import "../components/counter.js";

// export function sendUsAMessage() {
//   const emailAddress = document.getElementById("email").value;
//   const notation = document.getElementById("notation").value;
//   const message = document.getElementById("message").value;

//   console.log(`${emailAddress}\n${notation}\n${message}`);
// }

export default () => /*html*/`
<section id="brokers">
    <p class="ingress">Vill du komma i kontakt med våra vassa mäklare?</p>

    <div id="dealers">
        <!-- Mäklare 1 -->
        <div class="dealer">
            <img src="./image/dealer.jpg" alt="Stig Insides" class="dealer-img">
                <h3 class="dealer-name">Stig Insides</h3>
                <p class="role">Auktoriserad bostadsmäklare</p>
                <p class="mail-us"><a href="mailto:stig.insides@homefinder.se?subject=Förfrågan om bostadsaffär">Maila mäklaren direkt!</a></p>
                <p class="call-us"><a href="tel:+46 8 123 45 67">Ring mig: 08-123 45 67</a></p>
        </div>
        <!-- Mäklare 2 -->
        <div class="dealer">
            <img src="./image/dealer2.jpg" alt="Forentia Zales" class="dealer-img">
                <h3 class="dealer-name">Forentia Zales</h3>
                <p class="role">Auktoriserad bostadsmäklare</p>
                <p class="mail-us"><a href="mailto:forentia.zales@homefinder.se?subject=Förfrågan om bostadsaffär">Maila mäklaren direkt!</a></p>
                <p class="call-us"><a href="tel:+46 8 123 45 67">Ring mig: 08-123 45 67</a></p>
        </div>
        <!-- Mäklare 3 -->
        <div class="dealer">
            <img src="./image/dealer3.jpg" alt="Tille Salusson" class="dealer-img">
                <h3 class="dealer-name">Tille Salusson</h3>
                <p class="role">Auktoriserad bostadsmäklare</p>
                <p class="mail-us"><a href="mailto:tille.salusson@homefinder.se?subject=Förfrågan om bostadsaffär">Maila mäklaren direkt!</a></p>
                <p class="call-us"><a href="tel:+46 8 123 45 67">Ring mig: 08-123 45 67</a></p>
        </div>

    </div>

</section>

  <section class="form-section">
       <p class="ingress">Du kan också skicka e-post till oss via formuläret</p>

    <form action="" class="contact-form">

      <input type="email" id="email" placeholder="Ange e-postadress" name="email" required=true;>

      <input type="text" id="notation" placeholder="Ärende" name="notation" required=true;>

      <input type="text" id="message" placeholder="Skriv in ditt meddelande" name="message" required=true;>

      <button id="form-contact-btn">Skicka meddelandet</button>

    </form>
  </section>
`;