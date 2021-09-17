const changeCaseTo = require('./change-case');
const toDotCase = require('to-dot-case')
const dir = `${process.cwd()}/App_Plugins`;
const propertyEditorPath = (name) => `${changeCaseTo.kebab(name)}`



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

const manifest = (name) => ({
    name: `package.manifest`,
    content: `{
        "propertyEditors": [
          {
            "name": "${name}",
            "alias": "${toDotCase(name)}",
            "editor": {
              "view": "~/App_Plugins/${propertyEditorPath(name)}/${view(name).name}"
            }
          }
        ],
        "javascript": [
          "~/App_Plugins/${propertyEditorPath(name)}/${controller(name).name}"
        ],
        "css": [
            "~/App_Plugins/${propertyEditorPath(name)}/${styles(name).name}"
        ]
      }`
})

module.exports = [manifest, view, controller, styles];