// Using the data from index.js, generate the README.md content
module.exports = (readmeData) => {
  const { title, description, github, email } = readmeData;
  return `# ${title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

#

## Description
${description} 

## Installation

## Usage

## License

## Contributing

## Tests

## Questions
https://github.com/${github}  - ${email}
`;
};
