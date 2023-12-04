// server - request js filen

// för att hämta data används
export async function getAllResidences() {
  var response = await fetch('../db.json');
  var responseJSON = await response.json();
  var str = JSON.stringify(responseJSON);
  var jsonData = JSON.parse(str);

  return jsonData;
};

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
    console.log('Bostad har sparats!', data);
  } catch (error) {
    console.log('Något gick fel', error);
  }
}


// async function getJsonFile() {
//   let response = await fetch('example.json');
//   let responsejson = await response.json();
//   let str = JSON.stringify(responsejson);
//   let jsonData = JSON.parse(str);

//   return jsonData;
// };

// getJsonFile().then(console.log);  // I see my .json file in console, how can I use it ?
// }
