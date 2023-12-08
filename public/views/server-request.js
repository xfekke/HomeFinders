// funktion för att hämta alla bostäder
export async function getAllResidences() {
  try {
    var response = await fetch('/residences');
    var responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av bostäder:', error);
  }
};

// funktion för att skicka en ny bostad till servern
export async function postResidence(formData) {
  try {
    var response = await fetch('/residences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return;
    console.log('Response:', response.status);
    window.location.replace("/");
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // alert('Bostad har sparats!')
  } catch (error) {
    // console.error('Något gick fel vid inlämning av bostad:', error);
  }
}
export async function getUser() {
  try {
    var response = await fetch('/user');
    var responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av bostäder:', error);
  }
};