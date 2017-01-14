import React, {Component, PropTypes} from 'react'

class AppContainer extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default AppContainer