import React, { useState } from 'react';
import Input from './Input';
import List from './List';

const Page = () => {
    const [usersList, setUsersList] = useState([])
    const getInp = (newUser) => {
        setUsersList((prev) => [...prev, newUser])
    }
    return (
        <>
            <Input getInp={getInp} />
            <List usersList={usersList}
                setUsersList={setUsersList}
            />
        </>
    );
};

export default Page;
