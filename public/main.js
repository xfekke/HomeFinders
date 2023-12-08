import { getAllResidences } from "./views/server-request.js";
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
// spa
const routes = {
  "/": { title: "Home", render: home },
  "/search": { title: "Search", render: search },
  "/contact": { title: "Contact", render: contact },
  "/about": { title: "About", render: about },
  "/realtor": { title: "Realtor", render: realtor },
  "/sellHome": { title: "SellHome", render: sellHome },
  "/logIn": { title: "LogIn", render: logIn }
};

<<<<<<< HEAD
// uppdaterad routerfunktion
=======
// routern hämtar nuvarande sökväg och hittar en matchande vy att lägga till som sidtitel
>>>>>>> 8636ca165fcd253e7eb3ca2e77b63c161b2e4e8d
async function router() {
  let view = routes[location.pathname];

  if (view && view.title === "Realtor" && !isAuthenticated()) {
    history.replaceState("", "", "/");
    view = routes["/"];
  }

  if (view) {
    document.title = view.title;
<<<<<<< HEAD
    if (view.render instanceof Function) {
      try {
        app.innerHTML = await view.render();
      } catch (error) {
        console.error("Error rendering view:", error);
        app.innerHTML = "Ett fel uppstod vid rendering av sidan.";
      }
    } else {
      app.innerHTML = view.render;
    }
=======
    app.innerHTML = await view.render();
>>>>>>> 8636ca165fcd253e7eb3ca2e77b63c161b2e4e8d
  } else {
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
  window.submitResidence = submitResidence;
});

// logga in funktioner ska funka
window.addEventListener("DOMContentLoaded", () => {
  window.handleLogin = handleLogin;
});
