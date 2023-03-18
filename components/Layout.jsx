import React from 'react';
import Head from 'next/head';

import {Footer, Navbar} from "@/components/index";

const Layout = ({children}) => {
    return (
        <div className={'layout'}>
            <Head>
                <title>MS Store</title>
            </Head>
            <header>
                <Navbar/>
            </header>
            <main className={'main-container'}>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Layout;
