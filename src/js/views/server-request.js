// funktion för att hämta alla bostäder
export async function getAllResidences() {
  try {
    var response = await fetch('http://localhost:3000/residences');
    var responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av bostäder:', error);
  }
};

// funktion för att skicka en ny bostad till servern
export async function postResidence(formData) {
  try {
    var response = await fetch('http://localhost:3000/residences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Bostad har sparats!', data);
  } catch (error) {
    console.error('Något gick fel vid inlämning av bostad:', error);
  }
}