import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class AboutPage extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default AboutPage