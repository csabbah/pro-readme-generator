// Using the data from index.js, generate the README.md content
module.exports = (readMeData) => {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    github,
    email,
    licenses,
  } = readMeData;

  return `# ${title}

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


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

## ${licenses.length > 1 ? 'Licenses' : 'License'}

This Applications is covered under the following ${
    licenses.length > 1 ? 'licenses:' : 'license:'
  }

${
  licenses.length > 1
    ? licenses
        .map((item) => {
          return `* ${item}\n`;
        })
        .join('')
    : licenses
}

## Questions
https://github.com/${github} 

How to reach me for additional questions: ${email}
`;
};
