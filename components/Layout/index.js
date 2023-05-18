import Head from "next/head";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BackToTop from "../BackToTop";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Ecommerce App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <BackToTop />
            <Footer />
        </>
    );
};

export default Layout;
