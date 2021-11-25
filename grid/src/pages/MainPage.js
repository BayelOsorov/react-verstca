import React from 'react';
import Footer from '../components/Footer/Footer';
import MainPageBody from '../components/MainPageBody/MainPageBody';
import Navbar from '../components/Navbar/Navbar';

const MainPage = () => {
    return (
        <>
            <Navbar />
            <MainPageBody />
            <Footer />
        </>
    );
};

export default MainPage;