import "../components/counter.js";

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
    <p class="ingress">
        Kontor: 08-778 20 80 / 08-530 20 180 </br>
        E-post: info@homefinders.se </br>
        Telefontid 8:00-23:00, alla dagar i veckan </br>
    </p>
</section>
<footer></footer>
`;