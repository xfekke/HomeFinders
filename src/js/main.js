import sellHome from "./views/sellHome.js";
import home from "./views/home.js";
import search from "./views/search.js";
import contact from "./views/contact.js";
import about from "./views/about.js";
import realtor from "./views/realtor.js";
import logIn from "./views/logIn.js";
import { submitResidence } from "./views/sellHome.js";
import { handleLogin } from "./views/logIn.js";

// funktion för att se inloggning
function isAuthenticated() {
  return localStorage.getItem("loggedIn") === "true";
}

const routes = {
  "/": { title: "Home", render: home },
  "/search": { title: "Search", render: search },
  "/contact": { title: "Contact", render: contact },
  "/about": { title: "About", render: about },
  "/realtor": { title: "Realtor", render: realtor },
  "/sellHome": { title: "SellHome", render: sellHome },
  "/logIn": { title: "LogIn", render: logIn }
};

// routern hämtar nuvarande sökväg och hittar en matchande vy att lägga till som sidtitel
function router() {
  let view = routes[location.pathname];

  // kontroll av inloggning
  if (view && view.title === "Realtor" && !isAuthenticated()) {
    history.replaceState("", "", "/");
    view = routes["/"]; // tillbaka till startsida om man ej är inloggad
  }

  // om vyn finns så uppdaterar den till det
  if (view) {
    document.title = view.title;
    app.innerHTML = view.render();
  } else {
    // om routern inte hittar något som matchar
    history.replaceState("", "", "/");
    router();
  }
};

// navigation
window.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

// uppdatera routern
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);

// sellHome funktioner ska laddas
window.addEventListener("DOMContentLoaded", () => {
  window.submitResidence = sellHome.submitResidence;
});
window.addEventListener("DOMContentLoaded", () => {
  window.submitResidence = submitResidence;
});


// logga in funktioner ska funka
window.addEventListener("DOMContentLoaded", () => {
  window.handleLogin = logIn.handleLogin;
});
window.addEventListener("DOMContentLoaded", () => {
  window.handleLogin = handleLogin;
});

