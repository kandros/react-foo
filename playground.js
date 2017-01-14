'use strict'
const program = require('commander')
const cameCase = require('./utils/camel-case')

program
    .description('Generate components, routes and other goodies')
    .option('--component')
    .option('--add-redux')
    .option('--redux-form-v5')
    .parse(process.argv)

console.log(program.args)

if (!program.args.length) {
    program.help()
}

const match = program.options.find(option => {
    const optionWithNoLeadingDashes = cameCase(
        option.long.replace('--', '')
    )

    return program.hasOwnProperty(optionWithNoLeadingDashes)
})

// console.log(program.args)