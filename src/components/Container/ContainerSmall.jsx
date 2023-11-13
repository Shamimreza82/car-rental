/* eslint-disable react/prop-types */
import React from 'react';

const ContainerSmall = ({children}) => {
    return (
        <div className='max-w-5xl m-auto'>
            {children}
        </div>
    );
};

export default ContainerSmall;