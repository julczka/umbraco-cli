#!/usr/bin/env node

const init = require('./utils/init');
const readline = require('readline');
const changeCaseTo = require('./utils/change-case');
const createFiles = require('./utils/create-files');

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
        
        createFiles(name);
         rl.close();
      });

      

})();