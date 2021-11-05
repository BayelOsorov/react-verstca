import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyCard from '../components/MyCard';
import { mainContext } from '../contexts/MainContext';
import { Button } from 'react-bootstrap';
import AddPage from './AddPage';

const MainPage = () => {
    const { getCountry, countries } = useContext(mainContext)
    useEffect(() => {
        getCountry()
    }, [])
    return (
        <div className='container'>
            <Link to='/add'  >
                <Button>Add country</Button>
            </Link>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    countries.map((item) => (
                        <MyCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default MainPage;