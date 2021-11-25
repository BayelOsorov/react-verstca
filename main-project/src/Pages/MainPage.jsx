import React, { useEffect, useState } from 'react';
//sidebar
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MediaCard from '../components/MediaCard';
import { clientContext } from '../contexts/ClientContext';
import { useNavigate } from 'react-router';
import Pagination from '../components/Pagination';



const MainPage = () => {
    const { getPhones, phones, currentPosts } = React.useContext(clientContext)
    const [brandValue, setBrandValue] = useState('')
    React.useEffect(() => {
        getPhones()
    }, [])
    let obj = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const filterPhones = (key, value) => {
        obj.set(key, value)
        let newUrl = `${window.location.pathname}?${obj.toString()}`
        navigate(newUrl)
        getPhones()
        setBrandValue(value)
    }
    useEffect(() => {
        setBrandValue(obj.get('brand'))
    }, [obj])

    return (
        <>
            <div className='main-page'>
                <div className='sidebar'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Brand</FormLabel>
                        <RadioGroup
                            value={brandValue}
                            onChange={(e) => filterPhones("brand", e.target.value)}
                            aria-label="brand"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="mi" control={<Radio />} label="Xiaomi" />
                            <FormControlLabel value="iphone" control={<Radio />} label="iPhone" />
                            <FormControlLabel value="samsung" control={<Radio />} label="Samsung" />
                            <FormControlLabel value="Nokia" control={<Radio />} label="Nokia" />

                        </RadioGroup>
                    </FormControl>
                </div>
                {
                    phones ? (<> <div className='phones' >
                        {
                            currentPosts.map((phone) => (
                                <MediaCard key={phone.id} phone={phone} />
                            ))
                        }
                    </div>

                    </>
                    ) : (
                        <h2>Loading</h2>
                    )
                }


            </div>
            <div>
                <Pagination />
            </div>
        </>
    );
};

export default MainPage;