// @flow weak
'use strict'

import type {Config, Blueprint} from '../types'
const chalk = require('chalk')
const getConfig = require('./getConfig')
const renderBlueprint = require('./renderBlueprint')
const renderTargetPath = require('./renderTargetPath')
const writefile = require('writefile')
const fs = require('fs')
const capitalize = require('../utils/capitalize')

class Generate {
    config: Config
    blueprints: Blueprint
    blueprintName: string
    entityName: string

    constructor(args, options) {
        this.config = getConfig()
        this.blueprints = this.config.blueprints
        this.blueprintName = options.blueprintName
        this._processArgs(args)
    }

    _processArgs(args) {
        this.entityName = capitalize(args[0])
    }

    run() {
        this.blueprints
            .filter(b => b.name === this.blueprintName)
            .forEach(b => {
                b.files.forEach(f => {

                    const path = f['blueprint-path']

                    const targetPath = renderTargetPath(f['target-path'], this.entityName)

                    if (fs.existsSync(targetPath)) {
                        console.log(`Skipped (already exists):  ${chalk.red(targetPath)}`)

                    } else {

                        const template = renderBlueprint(path, this.entityName)

                        writefile(targetPath, template, () => {
                            console.log(`File created:  ${chalk.green(targetPath)}`)
                        })
                    }
                })
            })
    }
}

module.exports = Generate