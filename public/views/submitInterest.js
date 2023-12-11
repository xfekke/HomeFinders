window.submitInterest = async function(residenceId) {
  const name = document.getElementById(`nameInterest-${residenceId}`).value;
  const phone = document.getElementById(`phoneInterest-${residenceId}`).value;
  const email = document.getElementById(`emailInterest-${residenceId}`).value;

  try {
    const response = await fetch('http://localhost:3000/interests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ residenceId, nameInterest, phoneInterest, emailInterest }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Intresseanmälan skickad', data);
    // Lägg till en bekräftelse till användaren här, t.ex. en alert eller uppdatera UI
  } catch (error) {
    console.error('Ett fel uppstod vid skickning av intresseanmälan:', error);
    // Lägg till ett felmeddelande till användaren här, t.ex. en alert
  }
};
