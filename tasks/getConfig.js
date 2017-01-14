// @flow
'use strict'

import type {Config} from '../types'
const chalk = require('chalk')
const constants = require('../constants')
const validateConfig = require('./validateConfig')
const getUserPathOrFallbackToDefault = require('../utils/getUserDefinedPathOrFallbackToDefault')

module.exports = function getConfig(): Config {
    try {
        const configFilePath = getUserPathOrFallbackToDefault(constants.configFilename)
        // $FlowFixMe
        const config = require(configFilePath)

        if (!validateConfig(config)) {
            console.log(chalk.red('Your react-foo config is invalid.'))
            process.exit(1)
        }

        return config
    } catch(e) {
        console.log(e)

        return process.exit(1)
    }
}
