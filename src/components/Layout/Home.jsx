import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Toaster/>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;