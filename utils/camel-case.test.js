// module.exports = function camelcase(entry) {
//     return entry.split('-').reduce(function (str, word) {
//         return str + word[0].toUpperCase() + word.slice(1);
//     });
// }
'use strict'


const camelCase = require('./camel-case')

test('camelCase', () => {
    expect(
        camelCase('viva-la-topa')
    ).toBe(
        'vivaLaTopa'
    )
})