import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from './Navigate/Navigation'

const Layout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
