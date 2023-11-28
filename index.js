// ladda SPA hash innehåll
function updateContent() {
  // obj med hashvärde
  var content = {
    '': '<h2>Välkommen till Homefinders</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#home': '<h2>Välkommen till Homefinders</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#search': '<h2>Sök Bostad</h2><p>Använd vår sökfunktion för att hitta ditt nya hem.</p>',
    '#contact': '<h2>Kontakt</h2><p>Kontakta oss för mer information eller boka en visning.</p>',
    '#about': '<h2>Om Oss</h2><p>Läs mer om vår mäklarfirma och vårt team.</p>',
  };

  // hämta hash url
  var hash = location.hash;

  // rätt hash innehåll i sidan
  var mainContent = document.getElementById('main-content');
  var loginContainer = document.getElementById('login-container');

  // rensa login container
  loginContainer.innerHTML = '';
  var existingLoginForm = document.getElementById('login-form');
  if (existingLoginForm) {
    existingLoginForm.removeEventListener('submit', handleLogin);
  }

  // visa hash innehåll/egenskap
  if (hash === '#login') {
    // css för centrera
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
  } else {
    // prio för innehåll
    mainContent.style.display = 'block';
    loginContainer.style.display = 'none';
    mainContent.innerHTML = content[hash] || content[''];
  }
}

// sätter url beroende på hash
function navigateTo(viewId) {
  location.hash = viewId;
}


window.onhashchange = updateContent;


document.addEventListener('DOMContentLoaded', updateContent);

// logga in
function handleLogin(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  // logik för inlog
  console.log('Mäklare försöker logga in med:', username, password);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', function (event) {
      // viewID ska matcha de man klickat
      var viewId = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
      navigateTo(viewId);
    });
  });
});
