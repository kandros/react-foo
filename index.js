'use strict';

const program = require('commander')
const Generate = require('./tasks/generate')

program
    .description('Generate components, routes and other goodies')
        //.arguments('<generator> [args]')
	    .parse(process.argv)

if (!program.args.length) {
    program.help()
}

new Generate([...program.args]).run()
