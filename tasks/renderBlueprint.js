'use strict';

const fs = require('fs')
const ejs = require('ejs')

const capitalize = (n) => n.charAt(0).toUpperCase() + n.slice(1)

module.exports = function renderBlueprint(bluePrintPath, entityName) {
    let template;
    try {
        template = fs.readFileSync(`${process.cwd()}/${bluePrintPath}`, 'utf8');
    } catch(e) {
        console.log(`Blueprint file doesn't exist in ${bluePrintPath}.`);
        process.exit(1);
    }

    return ejs.render(template, {
        name: entityName,
        helpers: {
            capitalize
        },
    });
}