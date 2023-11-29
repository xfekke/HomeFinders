function updateContent() {

  var content = {
    '': '<h2>Välkommen till Homefinders</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#home': '<h2>Välkommen till Homefinders</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#search': '<h2>Sök Bostad</h2><p>Använd vår sökfunktion för att hitta ditt nya hem.</p>',
    '#contact': '<h2>Kontakt</h2><p>Kontakta oss för mer information eller boka en visning.</p>',
    '#about': '<h2>Om Oss</h2><p>Läs mer om vår mäklarfirma och vårt team.</p>',
  };


  var hash = location.hash;


  var mainContent = document.getElementById('main-content');
  var loginContainer = document.getElementById('login-container');


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
  } else if (hash === '#sell') {

    mainContent.style.display = 'block';
    loginContainer.style.display = 'none';
    mainContent.innerHTML = sellResidence()['#sell'];
  } else {

    mainContent.style.display = 'block';
    loginContainer.style.display = 'none';
    mainContent.innerHTML = content[hash] || content[''];
  }
}


function navigateTo(viewId) {
  location.hash = viewId;
}

window.onhashchange = updateContent;

document.addEventListener('DOMContentLoaded', updateContent);


function handleLogin(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  console.log('Mäklare försöker logga in med:', username, password);

  if (username === "homefinders" && password === "1234") {
    alert("Hej mäklare!");

  } else {
    alert("Fel användarnamn eller lösenord");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav button').forEach(button => {

    var viewId = button.dataset.viewId;
    button.addEventListener('click', function () {
      navigateTo(viewId);
    });
  });
});