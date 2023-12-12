window.submitInterest = async function (residenceId) {
  const name = document.getElementById(`nameInterest-${residenceId}`).value;
  const phone = document.getElementById(`phoneInterest-${residenceId}`).value;
  const email = document.getElementById(`emailInterest-${residenceId}`).value;

  try {
    const response = await fetch('/interests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ residenceId, name, phone, email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Intresseanmälan skickad', data);
  } catch (error) {
    console.error('Ett fel uppstod vid skickning av intresseanmälan:', error);
  }
};