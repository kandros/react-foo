'use strict';

const program = require('commander')
const Generate = require('./tasks/generate')
const GenerateComponent = require('./tasks/generateComponent')

program
    .description('Generate components, routes and other goodies')
    //.arguments('<generator> [args]')
    .option('--component')
    .parse(process.argv)

if (!program.args.length) {
    program.help()
}

if (program.component) {
    new GenerateComponent([...program.args]).run()
}

