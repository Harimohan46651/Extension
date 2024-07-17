const fs = require('fs');

// Function to read JSON from a file
function readJsonFromFile(filePath) {
  try {
    // Read file contents
    const data = fs.readFileSync(filePath, 'utf8');
    
    // Parse JSON data
    const jsonData = JSON.parse(data);

    // Return the parsed JSON data
    return jsonData;
  } catch (err) {
    console.error('Error reading JSON file:', err);
    throw err;
  }
}

// Export the function
module.exports = { readJsonFromFile };