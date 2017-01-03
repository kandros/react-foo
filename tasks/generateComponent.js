'use strict';
const chalk  = require('chalk')
const getConfig = require('./getConfig')
const renderBlueprint = require('./renderBlueprint')
const renderTargetPath = require('./renderTargetPath')
const writefile = require('writefile')


const capitalize = (n) => n.charAt(0).toUpperCase() + n.slice(1)

class Generate {
    constructor(args) {
        this.config = getConfig()
        this.blueprints = this.config.blueprints
        this._processArgs(args);
    }

    _processArgs(args) {
        this.entityName  = capitalize(args[0])
    }

    run() {
        console.log('Created files:')
        this.blueprints.forEach(b => {
            b.files.forEach(f => {

                const path = f['blueprint-path'];

                const template = renderBlueprint(path, this.entityName)
                const targetPath = renderTargetPath(f['target-path'], this.entityName)

                writefile(targetPath, template, () => {
                    console.log(chalk.green(targetPath))
                })
            })
        })
    }
}

module.exports = Generate