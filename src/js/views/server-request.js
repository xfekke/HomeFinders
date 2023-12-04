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
    var response = await fetch('../db.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newResidence),
    });

    const data = await response.json();
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
