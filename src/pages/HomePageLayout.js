import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Responsive, } from 'semantic-ui-react'


class DesktopContainer extends Component {
    render() {
        const {children} = this.props;
        return (
            <Responsive>
                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

const ResponsiveContainer = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

const HomepageLayout = ({children}) => (
    <ResponsiveContainer>
        {children}
    </ResponsiveContainer>
);
export default HomepageLayout