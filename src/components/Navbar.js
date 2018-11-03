import React from 'react';
import { Button, Container, Menu, Segment } from "semantic-ui-react";
import { HOME, LOGIN, SIGNUP } from "../constants/url-list";
import { Link } from "react-router-dom";

export const Navbar = ({fixed}) => (
    <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
    >
        <Container>
            <Link to={HOME}>
                <Menu.Item active>
                    Pizza Shop
                </Menu.Item>
            </Link>
            <Menu.Item position='right'>
                <Link to={LOGIN}>
                    <Button as='a' inverted={!fixed} href={LOGIN}>
                        Log in
                    </Button>
                </Link>
                <Link to={SIGNUP}>
                    <Button inverted={!fixed} primary={fixed} style={{marginLeft: '0.5em'}}>
                        Sign Up
                    </Button>
                </Link>
            </Menu.Item>
        </Container>
    </Menu>
);