import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class HomePage extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default HomePage