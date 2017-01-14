// @flow
'use strict'

const fs = require('fs')
const ejs = require('ejs')
const capitalize = (n) => n.charAt(0).toUpperCase() + n.slice(1)
const {yellow} = require('chalk')
const getUserDefinedPathOrFallbackToDefault = require('../utils/getUserDefinedPathOrFallbackToDefault')

module.exports = function renderBlueprint(blueprintPath: string, entityName: string): string {
    let template
    try {
        const blueprintsFolder = getUserDefinedPathOrFallbackToDefault(blueprintPath)
        template = fs.readFileSync(blueprintsFolder, 'utf8')
    } catch(e) {
        console.log(`Blueprint file doesn't exist in ${process.cwd()}/${yellow(blueprintPath)}.`)
        process.exit(1)
    }

    return ejs.render(template, {
        name: entityName,
        helpers: {
            capitalize
        },
    })
}
