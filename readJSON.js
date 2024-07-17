// const fs = require('fs');

// // Read the JSON file
// fs.readFile('./exampleJson.JSON', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     // Parse the JSON data
//      JSON.parse(data);

//     // Access the data
//     console.log(jsonData);
// });

const obj = {name: 'Sara', age: 25}
const json = JSON.stringify(obj)
console.log(json)

module.exports = json