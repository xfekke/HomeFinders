function updateContent() {
    var content = {
        '': '<h2>Välkommen till Homefinders</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
        '#home': '<h2>Välkommen till Dhyr & Rumson</h2><p>Din partner för att hitta drömboendet eller sälja din nuvarande bostad.</p>',
        '#search': '<h2>Sök Bostad</h2><p>Använd vår sökfunktion för att hitta ditt nya hem.</p>',
        '#about': '<h2>Om Oss</h2><p>Läs mer om vår mäklarfirma och vårt team.</p>',
    };
    
    var hash = location.hash;
    var mainContent = document.getElementById('main-content');
    
  function navigateTo(viewId) {
    location.hash = viewId;
  }
  
  window.onhashchange = updateContent;
  document.addEventListener('DOMContentLoaded', updateContent);
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function(event) {
            var viewId = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
            navigateTo(viewId);
        });
    });
  })
};