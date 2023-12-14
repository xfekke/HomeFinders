import "../components/counter.js";
import { getUser } from "./server-request.js";

//funktion för att logga in
export async function handleLogin() {
  //hämtar info från db.json, inlogg finns i databas "/user"
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //kollar så inlogg stämmer med "/user"
  const users = await getUser();
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem("loggedIn", "true");
    //visar logga ut-knapp vid inloggning
    document.getElementById("logoutButton").style.display = 'block';
    alert("Inloggning lyckades!");
    console.log("Inloggning lyckades!");
    //byter sida vid inlogg
    history.pushState("", "", '/realtor');

    //kollar med router för spa
    if (typeof router === 'function') {
      router();
    }
  } else {
    alert("Fel användarnamn eller lösenord. Försök igen.");
  }
}

//funktion: logga ut
export function handleLogout() {
  //tar bort inlogg från localStorage
  localStorage.removeItem("loggedIn");
  //gömmer logga ut-knappen //den ska bara synas när user är inloggad
  document.getElementById("logoutButton").style.display = 'none';
  //tillbaka till startsida efter man loggat ut
  window.location.href = '/';
}

//window.addEventListener ---> letar efter event på sidan, (händelse, funktion)
//addEventListener när sida laddas in
window.addEventListener("DOMContentLoaded", () => {
  //visa log ut knappen om man är inloggad
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("logoutButton").style.display = 'block';
  }
  //addEvenListener för knapptryck på logga ut
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
  }
});

//html render
export default () => `
  <form id="login-form">
    <label for="username">Användarnamn:</label>
    <input type="text" id="username" name="username" required>
    </br>
    <label for="password">Lösenord:</label>
    <input type="password" id="password" name="password" required>
    <button type="button" id="loginButton" onclick="handleLogin()">Logga in</button>
  </form>
  <button id="logoutButton" style="display: none;" onclick="handleLogout()">Logga ut</button>
`;