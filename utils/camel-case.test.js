'use strict'

const camelCase = require('./camel-case')

test('camelCase', () => {
    expect(
        camelCase('viva-la-topa')
    ).toBe(
        'vivaLaTopa'
    )
})