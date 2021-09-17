const changeCaseTo = require('./change-case');


const view = (name) => ({
    name: `${changeCaseTo.kebab(name)}.html`,
    content: `<div ng-controller="${changeCaseTo.camel(name)}Controller" class="${changeCaseTo.kebab(name)}">
    <input ng-model="model.value"></input>
    {{model.value}}
</div>`

});

const controller = (name) => ({

    name: `${changeCaseTo.kebab(name)}.controller.js`,
    content: `angular.module("umbraco")
    .controller("${changeCaseTo.camel(name)}Controller",
    function () {
        alert("The ${changeCaseTo.camel(name)} controller has landed");
    });`

});

const styles = (name) => ({
    name: `${changeCaseTo.kebab(name)}.css`,
    content: `.${changeCaseTo.kebab(name)} {
        color: red;
    }`
})

module.exports = [view, controller, styles];