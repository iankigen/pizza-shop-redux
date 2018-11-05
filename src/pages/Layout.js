import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Responsive, Segment } from 'semantic-ui-react';

import { Foooter } from './../components/Footer'
import Navbar from "../components/Navbar";


class AppContainer extends Component {
    render() {
        const {children} = this.props;
        return (
            <Responsive>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 800, padding: '1em 0em'}}
                        vertical
                    >
                        <Navbar/>
                        {children}
                    </Segment>
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
