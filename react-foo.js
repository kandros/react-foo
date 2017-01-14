// @flow
import type {Config} from './types'

const config: Config = {
    blueprints: [
        {
            'name': 'add-react-router-v3',
            'description': 'Generates a dumb react component in shared components',
            'usage': 'dumb-s [component-name]',
            'files': [
                {
                    'blueprint-path': 'blueprints/react-router-v3/Router.js',
                    'target-path': 'components/Router.js'
                },
                {
                    'blueprint-path': 'blueprints/react-router-v3/routes.js',
                    'target-path': 'routes.js'
                },
                {
                    'blueprint-path': 'blueprints/react-router-v3/AppContainer.js',
                    'target-path': 'components/AppContainer.js'
                },
                {
                    'blueprint-path': 'blueprints/react-router-v3/HomePage.js',
                    'target-path': 'components/HomePage.js'
                },
                {
                    'blueprint-path': 'blueprints/react-router-v3/AboutPage.js',
                    'target-path': 'components/AboutPage.js'
                }

            ]
        },
        {
            'name': 'redux-form-v5',
            'description': 'Generates a dumb react component in shared components',
            'usage': 'dumb-s [component-name]',
            'files': [
                {
                    'blueprint-path': 'blueprints/redux-form-v5/container.ejs',
                    'target-path': 'components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>Container.js'
                },
                {
                    'blueprint-path': 'blueprints/redux-form-v5/presentational.ejs',
                    'target-path': 'components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>Presentational.js'
                }
            ]
        },
        {
            'name': 'add-redux',
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