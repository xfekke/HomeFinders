import "../components/counter.js";

export function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // login hårdkodat
  if (username === "homefinders" && password === "1234") {
    alert("Inloggning lyckades!");
    console.log("Inloggning lyckades!");
    // lägg till omdiregering här
  } else {
    alert("Fel användarnamn eller lösenord. Försök igen.");
  }
}


export default () => /*html*/`
  <form id="login-form">
    <label for="username">Användarnamn:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Lösenord:</label>
    <input type="password" id="password" name="password" required>
    <button type="button" onclick="handleLogin()">Logga in</button>
  </form>
`;

