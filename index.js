#!/usr/bin/env node

const alert = require('cli-alerts');
const init = require('./utils/init');
const readline = require('readline');
const toKebabCase = require('./utils/to-kebap-case');

(async () => {
	init({clear: true});
    let name = '';


    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'OHAI> '
      });
      
      rl.question('Name your property editor:  ', (answer) => {
        // TODO: Log the answer in a database
        name = answer;
        console.log(`Scaffolding ${answer}...`);
      
        
        console.log(toKebabCase(name));
         rl.close();
      });

      

})();