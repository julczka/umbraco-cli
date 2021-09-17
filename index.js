#!/usr/bin/env node

const init = require('./utils/init');
const readline = require('readline');
const changeCaseTo = require('./utils/change-case');
const createFiles = require('./utils/create-files');
const alert = require("cli-alerts");

( () => {
	init({clear: true});
    let name = '';

    alert({ type: "info", msg: "Type in the name of your editor. You can use spaces." });


    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
      rl.question('I wanna make a property editor called...  ', (answer) => {
        // TODO: Log the answer in a database
        name = answer;
        console.log(`Scaffolding ${answer}...`);
        
         createFiles(name);
         
         rl.close();
      });

      

})();