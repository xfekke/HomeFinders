// funktion för att hämta alla bostäder ur residences i db.json
export async function getAllResidences() {
  try {
    let response = await fetch('/residences');
    let responseJSON = await response.json();
    console.log("result = ", typeof responseJSON);
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av bostäder:', error);
  }
};

// funktion för att skicka en ny bostad till servern
export async function postResidence(formData) {
  try {
    let response = await fetch('/residences', {
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
    let response = await fetch('/submit-interest', {
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
    let response = await fetch('/user');
    let responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av användarinformation', error);
  }
};

export async function getInterests() {
  try {
    let response = await fetch('/interests');
    if (!response.ok) {
      throw new Error('Nätverksrespons var inte ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fel vid hämtning av intresseanmälningar:', error);
    return [];
  }
}