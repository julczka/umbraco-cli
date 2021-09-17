const fs = require('fs');
const alert = require('cli-alerts');
const changeCaseTo = require('./change-case');
const files = require('./files-data');

module.exports = (name) => {

    const dir = `${process.cwd()}/App_Plugins`;

    if (!fs.existsSync(dir)) {
        alert({type: 'error', msg: 'App_Plugins directory does not exist'})
    } else {

        console.log('Now we shall make some files!');
        const propertyEditorPath = `${dir}/${changeCaseTo.kebab(name)}`
        fs.mkdirSync(propertyEditorPath);
        files.forEach(file => fs.writeFileSync(`${propertyEditorPath}/${file(name).name}`, file(name).content))


    }
}