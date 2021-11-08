import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminContextProvider from './contexts/AdminContext';
import AddPage from './Pages/AddPage';
import AdminPage from './Pages/AdminPage';
import EditPage from './Pages/EditPage';

const MyRoutes = () => {
    return (
        <AdminContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/admin/add' element={<AddPage />} />
                    <Route path='/admin/edit/:id' element={<EditPage />} />

                    <Navigate to='/' />

                </Routes>
            </BrowserRouter>
        </AdminContextProvider>
    );
};

export default MyRoutes;