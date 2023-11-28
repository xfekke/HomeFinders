// Huvudfunktion för att uppdatera sidinnehållet baserat på hashen i URL:en
function updateContent() {
  // Objekt som kartlägger hashvärdet till motsvarande sidinnehåll
  var content = {
    '': '<h2>Välkommen till Dhyr & Rumson</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#home': '<h2>Välkommen till Dhyr & Rumson</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
    '#search': '<h2>Sök Bostad</h2><p>Använd vår sökfunktion för att hitta ditt nya hem.</p>',
    '#contact': '<h2>Kontakt</h2><p>Kontakta oss för mer information eller boka en visning.</p>',
    '#about': '<h2>Om Oss</h2><p>Läs mer om vår mäklarfirma och vårt team.</p>',
  };

  // Hämta den aktuella hashen från URL:en
  var hash = location.hash;

  // Använd hashen för att hämta och sätta rätt innehåll i main-elementet
  var mainContent = document.getElementById('main-content');
  var loginContainer = document.getElementById('login-container');

  // Rensa loginContainer och ta bort eventlyssnare om den finns
  loginContainer.innerHTML = '';
  var existingLoginForm = document.getElementById('login-form');
  if (existingLoginForm) {
    existingLoginForm.removeEventListener('submit', handleLogin);
  }

  // Visa innehållet baserat på hashen
  if (hash === '#login') {
    // Använd CSS för att visa och centrera login-formuläret
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
    // Visa huvudinnehållet och använd hashen för att bestämma vilket innehåll som ska visas
    mainContent.style.display = 'block';
    loginContainer.style.display = 'none';
    mainContent.innerHTML = content[hash] || content[''];
  }
}

// Eventlyssnare som sätter URL:ens hash när användaren klickar på en navigeringsknapp
function navigateTo(viewId) {
  location.hash = viewId;
}

// Eventlyssnare som kallar på updateContent när det finns en hashändring i URL:en
window.onhashchange = updateContent;

// Kalla på updateContent när sidan har laddats
document.addEventListener('DOMContentLoaded', updateContent);

// Hantering av inloggning
function handleLogin(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  // Här skulle du lägga till din logik för att verifiera användaren
  console.log('Mäklare försöker logga in med:', username, password);
  // Implementera autentisering och hantering av inloggningsstatus här
}

// Lägg till klick-eventlyssnare för varje navigationsknapp
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', function (event) {
      // Uppdatera 'viewId' för att matcha den knapp som klickats på
      var viewId = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
      navigateTo(viewId);
    });
  });
});
