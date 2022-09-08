const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = []


const generateReadme = ({ Title, Description, Table, Installation, Usage, License, Features, Contributors, Tests, Username, Link }) =>
`## ${Title} ${License}
    
## Description
${Description}
    
## Table of Contents
${Table}
    
## Installation
${Installation}
    
## Usage
${Usage}
    
## Features
${Features}
    
## Contributors
${Contributors}
    
## Tests
${Tests}
    
## Questions
${Username}
${Link}

`;

inquirer.prompt([
    {
        type: "input",
        message: chalk.magenta.underline('What is the title of your project?\n\n'),
        name: "Title",
    },  {
        type: "input",
        message: chalk.magenta.underline('Please provide a detailed description about your application.\n\n'),
        name: "Description"
    },  {
        type: "input",
        message: chalk.magenta.underline('List your table of contents.\n\n'),
        name: "Table of Contents"
    },{
        type: "input",
        message: chalk.magenta.underline('What is required to be installed for your application to run?\n\n'),
        name: "Installation"
    },  {
        type: "input",
        message: chalk.magenta.underline('Please provide instructions and examples for use of your application.\n\n'),
        name: "Usage",
    },  {
        type: "list",
        message: chalk.magenta.underline('Add the license used.\n\n'),
        name: "License",
        choices: [new inquirer.Separator(), 
        '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', 
        new inquirer.Separator(), '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)', 
        new inquirer.Separator(), '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        new inquirer.Separator()]
    },  {
        type: "input",
        message: chalk.magenta.underline('Please describe additional features (if any) about your application.\n\n'),
        name: "Features"
    },  {
        type: "input",
        message: chalk.magenta.underline('Who contributed to this project?\n\n'),
        name: "Contributors"
    },  {
        type: "input",
        message: chalk.magenta.underline('Write tests for your application and provide examples on how to run them.\n\n'),
        name: "Tests"
    },  {
        type: "input",
        message: chalk.magenta.underline('Please provide your GitHub username.\n\n'),
        name: "Username"
    },  {
        type: "input",
        message: chalk.magenta.underline('Please provide your GitHub link.\n\n'), 
        name: "Link"
    }
])


.then((answers) => {
    const done = chalk.green.underline;
    const readmeContent = generateReadme(answers)

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log(done("File Created!")));
})
