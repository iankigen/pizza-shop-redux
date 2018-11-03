import React from 'react';
import { Button, Container, Menu } from "semantic-ui-react";
import {HOME, LOGIN, SIGNUP} from "../constants/url-list";

export const Navbar = ({fixed}) => (
    <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
    >
        <Container>
            <Menu.Item as='a' active href={HOME}>
                Pizza Shop
            </Menu.Item>
            <Menu.Item position='right'>
                <Button as='a' inverted={!fixed} href={LOGIN}>
                    Log in
                </Button>
                <Button as='a' inverted={!fixed} primary={fixed} style={{marginLeft: '0.5em'}} href={SIGNUP}>
                    Sign Up
                </Button>
            </Menu.Item>
        </Container>
    </Menu>
);