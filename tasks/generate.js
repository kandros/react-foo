// @flow weak
'use strict'

import type {Config, Blueprint} from '../types'
const chalk = require('chalk')
const getConfig = require('./getConfig')
const renderBlueprint = require('./renderBlueprint')
const renderTargetPath = require('./renderTargetPath')
const writefile = require('writefile')
const capitalize = require('../utils/capitalize')

class Generate {
    config: Config
    blueprints: Blueprint
    entityName: string

    constructor(args) {
        this.config = getConfig()
        this.blueprints = this.config.blueprints
        this._processArgs(args)
    }

    _processArgs(args) {
        this.entityName = capitalize(args[0])
    }

    run() {
        console.log(chalk.yellow('Start'))
        console.log(this.entityName)
        this.blueprints.forEach(b => {
            b.files.forEach(f => {

                const path = f['blueprint-path']
                console.log(chalk.green('---------------------'))
                console.log(path)

                const template = renderBlueprint(path, this.entityName)
                const targetPath = renderTargetPath(f['target-path'], this.entityName)

                console.log(targetPath)

                writefile(targetPath, template)
            })
        })
    }
}

module.exports = Generate