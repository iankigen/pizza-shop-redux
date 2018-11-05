import React from 'react';
import HomepageLayout from "./HomePageLayout";
import { Foooter } from "../components/Footer";
import Navbar from "../components/Navbar";

const ProductsPageLayout = ({children}) => (
    <HomepageLayout>
        <Navbar/>
        {children}
        <Foooter/>
    </HomepageLayout>
);
export default ProductsPageLayout;