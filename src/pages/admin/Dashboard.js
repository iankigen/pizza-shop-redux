import React from 'react';
import HomepageLayout from "./../HomePageLayout";
import { AdminNavbar } from "../../components/admin/AdminNavbar";
import { Advert } from "../../components/Advert";
import { Foooter } from "../../components/Footer";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ADMIN_ACCEPT_ORDER, ADMIN_ADD_PIZZA, ADMIN_DASHBOARD } from "../../constants/url-list";

const ButtonExampleAnimated = () => (
    <Container style={{marginTop: '1em', marginBottom: '1em'}}>
        <div>
            <Button.Group widths='4'>
                <Link to={ADMIN_ADD_PIZZA}>
                    <Button basic color='orange'>Pizza Details</Button>
                </Link>
                <Link to={ADMIN_DASHBOARD}>
                    <Button basic color='yellow'>Sales Overview</Button>
                </Link>
                <Link to={ADMIN_ACCEPT_ORDER}>
                    <Button basic color='green'>Orders</Button>
                </Link>
                <Link to={ADMIN_ACCEPT_ORDER}>
                    <Button basic color='blue'>Support</Button>
                </Link>
            </Button.Group>
        </div>
    </Container>
);

const AdminDashboard = () => (
    <HomepageLayout>
        <AdminNavbar/>
        <Advert/>
        <ButtonExampleAnimated/>
        <Foooter/>
    </HomepageLayout>
);
export default AdminDashboard;