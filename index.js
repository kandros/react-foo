'use strict';

const program = require('commander')
const GenerateComponent = require('./tasks/generateComponent')

program
    .description('Generate components, routes and other goodies')
    //.arguments('<generator> [args]')
    .option('--component')
    .option('--redux')
    .parse(process.argv)

if (!program.args.length) {
    program.help()
}

if (program.component) {
    new GenerateComponent([...program.args], {blueprintName: 'component'}).run()
}

if (program['redux']) {
    new GenerateComponent([...program.args], {blueprintName: 'redux'}).run()
}

