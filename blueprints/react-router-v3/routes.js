import React from 'react'
import {Route, IndexRoute} from 'react-router'
import AppContainer from './components/AppContainer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

const NoMatch = () => <h1>No Match route</h1>

export default(
    <Route path="/" component={AppContainer}>
        <IndexRoute component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)