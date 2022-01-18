// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
} else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/)`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (lisense) {
    return `https://choosealicense/com/license/${license}`
} else {
  //empty string returning
    return "#";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This license is being used for this project ${renderLicenseLink}(license)}`;
} else {
    return "";
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of contents
  * [Description](#description)
  * [Installation Instructions](#Installation-Instructions)
  * [How to Contribute](#How-to-Contribute)
  * [To Test](#To-Test)
  * [License](#License)
  ## Description 
  ${data.description}
  ## Installation Instructions
  ${data.installation}
  ## Usage
  ${data.usage}
  ## How to contribute
  ${data.contribution}
  ## To Test
  ${data.tests}
  ## License
  ${data.license}
  ## Questions
  If you have any questions, contact me at ${data.githubUsername} or email me at 
  ${data.email}
  `;}  


module.exports = generateMarkdown;
