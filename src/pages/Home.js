import React from 'react';

import ResponsiveContainer from './Layout'
import { Container, Header } from "semantic-ui-react";
import PropTypes from "prop-types";


const HomepageHeading = ({mobile}) => (
    <Container text>
        <Header
            as='h1'
            content='Pizza Shop'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
    </Container>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};
const HomepageLayout = () => (
    <ResponsiveContainer>
        <HomepageHeading/>
    </ResponsiveContainer>
);

export default HomepageLayout
