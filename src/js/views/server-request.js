// server - request js filen

// för att hämta data används
export async function getAllResidences() {
  var response = await fetch('../db.json');
  var responseJSON = await response.json();
  var str = JSON.stringify(responseJSON);
  var jsonData = JSON.parse(str);

  return jsonData;
};



// async function getJsonFile() {
//   let response = await fetch('example.json');
//   let responsejson = await response.json();
//   let str = JSON.stringify(responsejson);
//   let jsonData = JSON.parse(str);

//   return jsonData;
// };

// getJsonFile().then(console.log);  // I see my .json file in console, how can I use it ?
// }
