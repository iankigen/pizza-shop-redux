import React from 'react';
import { Button, Container, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ADMIN_DASHBOARD, ADMIN_LOGIN, LOGOUT } from "../../constants/url-list";

export const AdminNavbar = ({children, minHeight=0}) => (
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
                <Link to={ADMIN_DASHBOARD}>
                    <Menu.Item>HOME</Menu.Item>
                </Link>
                <Link to={ADMIN_LOGIN}>
                    <Menu.Item>Pizza</Menu.Item>
                </Link>
                <Link to={ADMIN_LOGIN}>
                    <Menu.Item>Orders</Menu.Item>
                </Link>
                <Link to={ADMIN_LOGIN}>
                    <Menu.Item>Sales</Menu.Item>
                </Link>
                <Link to={ADMIN_LOGIN}>
                    <Menu.Item>Feedback</Menu.Item>
                </Link>

                <Menu.Item position='right'>
                    <Link to={LOGOUT}>
                        <Button style={{marginLeft: '0.5em'}} inverted>
                            Logout
                        </Button>
                    </Link>
                </Menu.Item>
            </Container>
        </Menu>
        {children}
    </Segment>
);
