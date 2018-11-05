import React from 'react';
import HomepageLayout from "./HomePageLayout";
import Navbar from "../components/Navbar";
import { HomepageHeading } from "../components/HomePageHeading";
import { Advert } from "../components/Advert";
import { Foooter } from "../components/Footer";

const Home = () => (
    <HomepageLayout>
        <Navbar/>
        <HomepageHeading/>
        <Advert/>
        <Foooter/>
    </HomepageLayout>
);
export default Home;