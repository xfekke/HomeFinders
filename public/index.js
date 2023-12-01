import { getAllResidences, postResidence, getOneResidence } from "./server-request.js";
// // await postResidence(5, "jaja väg 2", 2, 10);
// console.log(await getAllResidences())
// console.log(await getOneResidence(5))
// let loggedIn = false;
import { sellResidence } from "./sellHome.js";

function updateContent() {

  var content = {
    '': '<h2>Välkommen till Homefinders</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#home': '<h2>Välkommen till Homefinders</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#search': '<h2>Sök Bostad</h2><p>Använd vår sökfunktion för att hitta ditt nya hem.</p>',
    '#contact': '<h2>Kontakt</h2><p>Kontakta oss för mer information eller boka en visning.</p>',
    '#about': '<h2>Om Oss</h2><p>Läs mer om vår mäklarfirma och vårt team.</p>',
    '#realtor': '<h2>Mäklarsidan</h2><p>Välkommen mäklare!</p>',
    '#sell': sellResidence()['#sell']
  };


  var hash = location.hash;

  var mainContent = document.getElementById('main-content');
  var loginContainer = document.getElementById('login-container');
  var logoutButton = document.getElementById('logout-button');


  loginContainer.innerHTML = '';
  var existingLoginForm = document.getElementById('login-form');
  if (existingLoginForm) {
    existingLoginForm.removeEventListener('submit', handleLogin);
  }


  if (hash === '#login') {

    mainContent.style.display = 'none';
    loginContainer.style.display = 'flex';
    loginContainer.innerHTML = `
          <form id="login-form">
              <h2>Mäklarlogin</h2>
              <input type="text" id="username" placeholder="Användarnamn" required>
              <input type="password" id="password" placeholder="Lösenord" required>
              <button type="submit">Logga in</button>
          </form>
      `;
    document.getElementById('login-form').addEventListener('submit', handleLogin);
  } else if (hash === '#realtor' && !loggedIn) {
    alert("Du måste vara inloggad för att se denna sida!");
    location.hash = 'login';
  } else {

    mainContent.style.display = 'block';
    loginContainer.style.display = 'none';
    mainContent.innerHTML = content[hash] || content[''];
  }

  logoutButton.style.display = loggedIn ? 'block' : 'none';

}


function navigateTo(viewId) {
  if (viewId === 'realtor' && !loggedIn) {
    alert("Du måste logga in för att se denna sida.");
    location.hash = 'login';
  } else {
    location.hash = viewId;
  }
}

window.onhashchange = updateContent;

document.addEventListener('DOMContentLoaded', updateContent);


function handleLogin(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var logoutButton = document.getElementById('logout-button');

  console.log('Mäklare försöker logga in med:', username, password);

  if (username === "homefinders" && password === "1234") {
    alert("Hej mäklare!");
    loggedIn = true;
    navigateTo('realtor');
  } else {
    alert("Fel användarnamn eller lösenord");
  }

  logoutButton.style.display = loggedIn ? 'block' : 'none';

}

function handleLogout() {
  loggedIn = false;
  var logoutButton = document.getElementById('logout-button');
  logoutButton.style.display = 'none';
  navigateTo('home');
}


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav button').forEach(button => {

    var viewId = button.dataset.viewId;
    button.addEventListener('click', function () {
      navigateTo(viewId);
    });
  });

  document.getElementById('logout-button').addEventListener('click', handleLogout);
}); 