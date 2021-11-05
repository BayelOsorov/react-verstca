import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react';

const Child = ({ getName }) => {
    let name = 'Sam'
    getName(name)
    return (
        <div>

        </div>
    );
};

export default Child;