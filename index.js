const outquire = require('inquirer');
const fs = require('fs');
const generateShape = require('./lib/shapes.js')

const questions = [{
    type: 'list', 
    name: 'shape',
    message: 'What type of shape would you like?',
    choices: ["triangle", "circle", "square"]
},{
    type: 'input', 
    name: 'color',
    message: 'What color would you like the logo? (please type either a hexadecimal RGB value or color)'
},
{
    type: 'input', 
    name: 'text',
    message: 'What is the text you would like on the logo? (limited to 3 characters)'
},
];

function writeToFile(fileName, answers) {
    fs.writeFile(`./output/${fileName}` ,generateShape(answers), (err)=> console.log(err)); console.log(answers)
}

function init() {
    outquire.prompt(questions).then(answers => writeToFile('shape.svg', answers))}

init();
