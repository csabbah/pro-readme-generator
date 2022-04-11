// Import the required modules
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Generate the README.md in the main directory and add the data
// inside the generateMarkdown parenthesis to the README.md file
fs.writeFile('../README.md', generateMarkdown('TITLE HERE'), (err) => {
  if (err) throw new Error(err);

  // Alert the user that the file has been successfully generated
  console.log('README.md complete! Check out README.md to see the output!');
});
