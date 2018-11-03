import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Responsive, Segment, Visibility } from 'semantic-ui-react';

import { Foooter } from './../components/Footer'
import { Navbar } from "../components/Navbar";


class AppContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});

    render() {
        const {children} = this.props;
        const {fixed} = this.state;

        return (
            <Responsive>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 800, padding: '1em 0em'}}
                        vertical
                    >
                        <Navbar fixed={fixed}/>
                        {children}
                    </Segment>
                </Visibility>
                <Foooter/>
            </Responsive>
        )
    }
}

AppContainer.propTypes = {
    children: PropTypes.node,
};


const ResponsiveContainer = ({children}) => (
    <div>
        <AppContainer>{children}</AppContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainer
