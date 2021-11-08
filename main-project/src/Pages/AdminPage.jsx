import React from 'react';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import BasicTable from '../components/BasicTable';
const AdminPage = () => {
    return (
        <div>
            <h2>Admin Page</h2>
            <div>
                <Link to='/admin/add' >
                    <Button variant='outlined' color='info' >Добавить телефон</Button>
                </Link>
                <BasicTable />
            </div>
        </div>
    );
};

export default AdminPage;