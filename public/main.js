import { getAllResidences, getInterests } from "./views/server-request.js";
import sellHome from "./views/sellHome.js";
import home from "./views/home.js";
import search from "./views/search.js";
import contact from "./views/contact.js";
import realtor from "./views/realtor.js";
import logIn from "./views/logIn.js";
import { submitResidence } from "./views/sellHome.js";
import { handleLogin } from "./views/logIn.js";

// funktion för att se inloggning
function isAuthenticated() {
  return localStorage.getItem("loggedIn") === "true";
}

//definierar routes + data för spa
const routes = {
  "/": { title: "Home", render: home },
  "/search": { title: "Search", render: search },
  "/contact": { title: "Contact", render: contact },
  "/realtor": { title: "Realtor", render: realtor, authenticated: true },
  "/sellHome": { title: "SellHome", render: sellHome },
  "/logIn": { title: "LogIn", render: logIn }
};

// uppdaterad routerfunktion
async function router() {
  let view = routes[location.pathname];

  if (view) {
    //kontroll för inloggning (Mäklarsidan/"realtor")
    if (view.authenticated && !isAuthenticated()) {
      app.innerHTML = `<p>Du måste vara inloggad för att se denna sida.</p>`;
      return;
    }

    //renderar nya sidans vy
    document.title = view.title;
    try {
      app.innerHTML = await view.render();
    } catch (error) {
      console.error("Error rendering view:", error);
      app.innerHTML = "Ett fel uppstod vid rendering av sidan.";
    }
  } else {
    //if else går tillbaka till startsida
    history.replaceState("", "", "/");
    router();
  }
};

// navigation vid klick på länkar
window.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

// --- globala eventListeners för funktioner på knappar
// uppdatera routern vid events
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);

// sellHome funktioner ska laddas
window.addEventListener("DOMContentLoaded", () => {
  window.submitResidence = submitResidence;
});

// logga in funktioner ska funka
window.addEventListener("DOMContentLoaded", () => {
  window.handleLogin = handleLogin;
});

// eventlistener för knapparna
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('interestButton')) {
    const residenceId = event.target.dataset.residenceId;
    showInterestForm(residenceId);
  }
});

// funktion för intresseanmälnings formuläret
function showInterestForm(residenceId) {
  const interestForm = document.querySelector(`#interestForm-${residenceId}`);
  if (interestForm) {
    interestForm.style.display = 'block';
  }
}

// inskick av formuläret
window.submitInterest = submitInterest;

//router global funktion
window.router = router;

//uppdaterar router när spa sida laddas
window.addEventListener("DOMContentLoaded", router);