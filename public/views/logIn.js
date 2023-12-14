import "../components/counter.js";
import { getUser } from "./server-request.js";

export async function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = await getUser();
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem("loggedIn", "true");
    document.getElementById("logoutButton").style.display = 'block';
    alert("Inloggning lyckades!");
    console.log("Inloggning lyckades!");
    history.pushState("", "", '/realtor');

    if (typeof router === 'function') {
      router();
    }
  } else {
    alert("Fel användarnamn eller lösenord. Försök igen.");
  }
}

export function handleLogout() {
  localStorage.removeItem("loggedIn");
  document.getElementById("logoutButton").style.display = 'none';
  window.location.href = '/';
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("logoutButton").style.display = 'block';
  }
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
  }
});

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
  <footer></footer>
`;