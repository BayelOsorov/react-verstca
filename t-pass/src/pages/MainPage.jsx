import React from 'react';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';
import HowDoesItWork from '../components/HowDoesItWork/HowDoesItWork';
import MainPageBody from '../components/MainPageBody/MainPageBody';
import Navbar from '../components/Navbar/Navbar';
import Section2 from '../components/Section2/Section2';
import Section3 from '../components/Section3/Section3';
import '../styles/Styles.css'
const MainPage = () => {
    return (
        <>
            <Navbar />
            <MainPageBody />
            <HowDoesItWork />
            <Section2 />
            <Section3 />
            <ContactUs />
            <Footer />
        </>
    );
};

export default MainPage;