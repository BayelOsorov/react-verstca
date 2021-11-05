import React from 'react';
import Child from './Child';

const Parent = () => {
    const getName = (params) => {
        console.log(params, '<--In Parent');
    }
    return (
        <>
            <Child getName={getName} />
        </>
    );
};

export default Parent;