// @flow
'use strict'

const fs = require('fs')
const ejs = require('ejs')

const capitalize = (n) => n.charAt(0).toUpperCase() + n.slice(1)

module.exports = function renderBlueprint(blueprintPath: string, entityName: string): string {
    let template
    try {
        template = fs.readFileSync(`${process.cwd()}/${blueprintPath}`, 'utf8')
    } catch(e) {
        console.log(`Blueprint file doesn't exist in ${blueprintPath}.`)
        process.exit(1)
    }

    return ejs.render(template, {
        name: entityName,
        helpers: {
            capitalize
        },
    })
}
