import React from 'react';
import { Button, Container, Header, Icon } from "semantic-ui-react";

export const HomepageHeading = () => (
    <Container text>
        <Header
            as='h4'
            content='NailGen Food'
            style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '1.3em',
            }}
        />
        <Header
            as='h5'
            content='Do whatever you want when you want to.'
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}
        />
        <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
        </Button>
    </Container>
);