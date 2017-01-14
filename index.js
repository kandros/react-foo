'use strict'

const program = require('commander')
const GenerateComponent = require('./tasks/generateComponent')
const chalk = require('chalk')

program
    .description('Generate components, routes and other goodies')
    .option('--component')
    .option('--add-redux')
    .option('--add-redux-form-v5')
    .option('--redux-form-v5')
    .parse(process.argv)


if (program.component) {
    new GenerateComponent(program.args, {blueprintName: 'component'}).run()
} else if (program['addRedux']) {
    new GenerateComponent(program.args, {blueprintName: 'redux'}).run()
} else if (program['reduxFormV5']) {
    new GenerateComponent(program.args, {blueprintName: 'redux-form-v5'}).run()
} else {
    program.help()
}

// console.log(program.args)
