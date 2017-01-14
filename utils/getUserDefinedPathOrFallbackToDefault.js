// @flow
'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function getUserDefinedPathOrFallbackToDefault(file: string): string {
    const defaultConfigFilePath = path.join(__dirname, '../' + file)
    const userConfigFilePath = process.cwd() + '/' + file
    const resultFile = fs.existsSync(userConfigFilePath) ? userConfigFilePath : defaultConfigFilePath
    return resultFile
}
