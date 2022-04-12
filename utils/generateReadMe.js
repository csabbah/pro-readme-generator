// Using the data from index.js, generate the README.md content
module.exports = (readmeData) => {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    github,
    email,
  } = readmeData;
  return `# ${title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

#

## Description
${description} 

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}

## License

## Questions
https://github.com/${github} 

How to reach me for additional questions: ${email}
`;
};
