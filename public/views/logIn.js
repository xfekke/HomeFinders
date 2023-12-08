import "../components/counter.js";

import { getUser } from "./server-request.js";

export async function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;


  const users = await getUser();


  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {

    localStorage.setItem("loggedIn", "true");

    alert("Inloggning lyckades!");
    console.log("Inloggning lyckades!");
    // lägg till omdiregering här
  } else {
    alert("Fel användarnamn eller lösenord. Försök igen.");
  }
}

export default () => `
  <form id="login-form">
    <label for="username">Användarnamn:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Lösenord:</label>
    <input type="password" id="password" name="password" required>
    <button type="button" onclick="handleLogin()">Logga in</button>
  </form>
`;

