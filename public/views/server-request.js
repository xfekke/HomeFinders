// funktion för att hämta alla bostäder
export async function getAllResidences() {
  try {
    var response = await fetch('/residences');
    var responseJSON = await response.json();
    console.log("result = ", typeof responseJSON);
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
    return response;
  } catch (error) {
    console.error('Fel vid skickande av ny bostad:', error);
  }
}

// funktion för att skicka intresseanmälan till servern
export async function postInterest(interestData) {
  try {
    var response = await fetch('/submit-interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(interestData),
    });
    return await response.json(); 
  } catch (error) {
    console.error('Fel vid skickande av intresseanmälan', error);
  }
}

// funktion för att hämta användarinformation
export async function getUser() {
  try {
    var response = await fetch('/user');
    var responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av användarinformation', error);
  }
};
