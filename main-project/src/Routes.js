import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import AdminContextProvider from './contexts/AdminContext';
import AuthContextProvider from './contexts/AuthContext';
import ClientContextProvider from './contexts/ClientContext';
import CommentContextProvider from './contexts/CommentContext';
import LikesContextProvider from './contexts/LikesContext';
import AddPage from './Pages/AddPage';
import AdminPage from './Pages/AdminPage';
import CartPage from './Pages/CartPage';
import DetailPage from './Pages/DetailPage';
import EditPage from './Pages/EditPage';
import MainPage from './Pages/MainPage';

const MyRoutes = () => {
    return (
        <LikesContextProvider>
            <CommentContextProvider>
                <AuthContextProvider>
                    <AdminContextProvider>
                        <ClientContextProvider>
                            <BrowserRouter>
                                <Navbar />
                                <Routes>
                                    <Route path='/admin' element={<AdminPage />} />
                                    <Route path='/admin/add' element={<AddPage />} />
                                    <Route path='/admin/edit/:id' element={<EditPage />} />
                                    <Route path='/' element={<MainPage />} />
                                    <Route path='/phone/:id' element={<DetailPage />} />
                                    <Route path='/cart' element={<CartPage />} />
                                    {/* <Route path='/chat' element={<Chat />} /> */}

                                    <Navigate to='/' />

                                </Routes>
                            </BrowserRouter>
                        </ClientContextProvider>
                    </AdminContextProvider>
                </AuthContextProvider>
            </CommentContextProvider>
        </LikesContextProvider>
    );
};

export default MyRoutes;