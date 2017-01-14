'use strict'

const program = require('commander')
const GenerateComponent = require('./tasks/generateComponent')
const chalk = require('chalk')

const reduxFormV5Instructions = require('./instructions/reduxFormV5Instructions')

program
    .description('Generate components, routes and other goodies')
    .option('--component')
    .option('--add-redux')
    .option('--redux-form-v5')
    .parse(process.argv)

if (!program.args.length) {
    program.help()
}

if (program.component) {
    new GenerateComponent(program.args, {blueprintName: 'component'}).run()

} else if (program['addRedux']) {
    new GenerateComponent(program.args, {blueprintName: 'redux'}).run()
        .then(() => {
            console.log('')
            console.log(chalk.yellow(`Add redux-form's reducer to your root reducer`))
            console.log(reduxFormV5Instructions)
        }).catch(e => e)
} else if (program['reduxFormV5']) {
    new GenerateComponent(program.args, {blueprintName: 'redux-form-v5'}).run()

}

// console.log(program.args)
