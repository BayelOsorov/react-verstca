import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import InfoPage from './pages/InfoPage'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/info' element={<InfoPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;