//hämta data från db.json - bostäder (/residences)
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

//sparar data i db.json - bostäder (/residences)
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
};

//sparar data i db.json - intresseanmälningar (/interests)
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
};

//hämta data från db.json vid inloggning för mäklare - namn och password i db
export async function getUser() {
  try {
    let response = await fetch('/user');
    let responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av användarinformation', error);
  }
};

//hämtar data från db.json - intresseanmälningar (/interests)
export async function getInterests() {
  try {
    let response = await fetch('/interests');
    //felhantering om data ej kan hämtas från json
    if (!response.ok) {
      throw new Error('Nätverksrespons var inte ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fel vid hämtning av intresseanmälningar:', error);
    return [];
  }
};

//uppdaterar intresseanmälningar från (/interests)
export async function updateInterestStatus(interestId, contacted) {
  try {
    let response = await fetch(`/interests/${interestId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contacted }),
    });
    return await response.json();
  } catch (error) {
    console.error('Fel vid uppdatering av intresseanmälan:', error);
  }
};