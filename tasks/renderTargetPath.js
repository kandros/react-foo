'use strict'

const fs = require('fs')
const ejs = require('ejs')

const capitalize = (n) => n.charAt(0).toUpperCase() + n.slice(1)

module.exports = function renderBlueprint(template, entityName) {
    return ejs.render(template, {
        name: entityName,
        helpers: {
            capitalize
        },
    })
}