const {
    grey,
    yellow
} = require('chalk')

module.exports = `
${grey('// reducers.js')}
import {${yellow('reducer')} as ${yellow('form')}} from ${yellow('redux-form')} ${grey('// add this')}

return combineReducers({
    ${yellow('form')} ${grey('// add this')}
})
`
