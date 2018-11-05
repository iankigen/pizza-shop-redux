import React from 'react';
import { Button, Container, Menu, Segment } from "semantic-ui-react";
import { CART, FEEDBACK, HOME, LOGIN, LOGOUT, ORDERS, PIZZA, SIGNUP } from "../constants/url-list";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({children, minHeight = 0, loggedIn}) => (
    <Segment
        inverted
        textAlign='center'
        style={{padding: '1em 0em', minHeight: minHeight}}
        vertical
    >
        <Menu
            inverted
            pointing
            secondary
            size='large'
        >
            <Container>
                <Link to={HOME}>
                    <Menu.Item>HOME</Menu.Item>
                </Link>
                <Link to={PIZZA}>
                    <Menu.Item>Menu</Menu.Item>
                </Link>
                {loggedIn && <Link to={ORDERS}>
                    <Menu.Item>Orders</Menu.Item>
                </Link>}
                {loggedIn && <Link to={CART}>
                    <Menu.Item>Cart</Menu.Item>
                </Link>}
                {loggedIn && <Link to={FEEDBACK}>
                    <Menu.Item>Feedback</Menu.Item>
                </Link>}

                {!loggedIn && <Menu.Item position='right'>
                    <Link to={LOGIN}>
                        <Button inverted>
                            Log in
                        </Button>
                    </Link>
                    <Link to={SIGNUP}>
                        <Button style={{marginLeft: '0.5em'}} inverted>
                            Sign Up
                        </Button>
                    </Link>
                </Menu.Item>}
                {loggedIn && <Menu.Item position='right'>
                    <Link to={LOGOUT}>
                        <Button style={{marginLeft: '0.5em'}} inverted>
                            Logout
                        </Button>
                    </Link>
                </Menu.Item>}
            </Container>
        </Menu>
        {children}
    </Segment>
);

const mapStateToProps = state => ({...state.authentication})

export default connect(mapStateToProps)(Navbar);