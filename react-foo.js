// @flow
import type {Config} from './types'

const config: Config = {
    blueprints: [
        {
            'name': 'redux-form-v5',
            'description': 'Generates a dumb react component in shared components',
            'usage': 'dumb-s [component-name]',
            'files': [
                {
                    'blueprint-path': 'blueprints/redux/store.js',
                    'target-path': 'redux/store.js'
                },
                {
                    'blueprint-path': 'blueprints/redux/reducers/root-reducer.js',
                    'target-path': 'redux/reducers/root-reducer.js'
                },
                {
                    'blueprint-path': 'blueprints/redux/reducers/app-reducer.js',
                    'target-path': 'redux/reducers/app-reducer.js'
                }
            ]
        },
        {
            'name': 'redux',
            'description': 'Generates a dumb react component in shared components',
            'usage': 'dumb-s [component-name]',
            'files': [
                {
                    'blueprint-path': 'blueprints/redux/store.js',
                    'target-path': 'redux/store.js'
                },
                {
                    'blueprint-path': 'blueprints/redux/reducers/root-reducer.js',
                    'target-path': 'redux/reducers/root-reducer.js'
                },
                {
                    'blueprint-path': 'blueprints/redux/reducers/app-reducer.js',
                    'target-path': 'redux/reducers/app-reducer.js'
                }
            ]
        },
        {
            'name': 'component',
            'description': 'Generates a dumb react component in shared components',
            'usage': 'dumb-s [component-name]',
            'files': [
                {
                    'blueprint-path': 'blueprints/component/container.ejs',
                    'target-path': 'components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>Container.js'
                },
                {
                    'blueprint-path': 'blueprints/component/presentational.ejs',
                    'target-path': 'components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>Presentational.js'
                }
            ]
        }
    ]
}

module.exports = config