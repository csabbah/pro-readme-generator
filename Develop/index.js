// Import the required modules
const fs = require('fs');
const generateReadMe = require('./utils/generateReadMe');
const inquirer = require('inquirer');

const promptReadme = () => {
  // IMPORTANT NOTE:
  // Key = name
  // The response = the value
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your Github username (Required)',
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log('You need to enter a Github username!');
          return false;
        }
      },
    },

    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address (Required)',
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter a Github username!');
          return false;
        }
      },
    },
  ]);
};

// Execute inquirer then return the responses from the prompts
// (The object itself can be extracted using the first line)
promptReadme().then((readmeData) => {
  // Then we pass the data into the function that generates the content
  const readMeContent = generateReadMe(readmeData);
  // Afterwards, generate the using the above generated content
  fs.writeFile('./README.md', readMeContent, (err) => {
    if (err) throw new Error(err);
    console.log(
      'Your README has been created! Check out README.md in this directory to see it!'
    );
  });
});
