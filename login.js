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
} else {

  mainContent.style.display = 'block';
  loginContainer.style.display = 'none';
  mainContent.innerHTML = content[hash] || content[''];
}

function handleLogin(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  console.log('Användare försöker logga in med:', username, password);

  
}