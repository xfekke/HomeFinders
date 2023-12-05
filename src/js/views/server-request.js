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

<<<<<<< HEAD
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
=======
// export async function postResidence() {
//   var response = await fetch('../db.json', {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       "address": address,
//       "type": type,
//       "floor": floor,
//       "rooms": rooms,
//       "size": size,
//       "price": price,
//       "yearBuilt": yearBuilt,
//       "balcony": balcony,
//       "storage": storage,
//       "parking": parking,
//       "courtyard": courtyard,
//       "patio": patio,
//       // "imageURL": imageURL,
//       // "additionalInfo": additionalInfo
//     })
//   });
//   return response;
// }

var fs = require('fs');


function updateDb(newData) {
  const filePath = 'db.json'; // path to your JSON file
  fs.readFile(filePath, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading file:', readErr);
      return;
    }

    // Parse the existing data and update it
    let db = JSON.parse(data);
    db = { ...db, ...newData }; // This merges the old data with the new data

    // Write the updated data back to the file
    fs.writeFile(filePath, JSON.stringify(db, null, 2), 'utf8', writeErr => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
      } else {
        console.log('Database successfully updated!');
      }
    });
  });
}

export async function postResidence() {

  const newResidence = {
    "id": 10,
    "address": address,
    "type": type,
    "floor": floor,
    "rooms": rooms,
    "size": size,
    "price": price,
    "yearBuilt": yearBuilt,
    "balcony": balcony,
    "storage": storage,
    "parking": parking,
    "courtyard": courtyard,
    "patio": patio,
    // "imageURL": imageURL,
    // "additionalInfo": additionalInfo
  }

  try {
    console.log(JSON.stringify(newResidence))
    updateDb({ residences: [newResidence] });
    // var response = await fetch('../db.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newResidence),
    // });

    // const data = await response.json();
>>>>>>> 0c0caf898f2d27610886a481bf238152eb2fc430
    console.log('Bostad har sparats!', data);
  } catch (error) {
    console.error('Något gick fel vid inlämning av bostad:', error);
  }
}