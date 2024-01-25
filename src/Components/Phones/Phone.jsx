import React from 'react';

const Phone = ({ phone }) => {



    const { phone_name, image, brand } = phone || {};


    return (
        <div className='w-[210px] mx-auto text-center border my-5 rounded'>
            <div className='w-[200px] h-[250px] mx-auto'>
                <img className='w-full h-full' src={image} alt="" />
            </div>

            <div className='my-5'>
                <h1 className='text-xl font-bold'>{phone_name}</h1>
                <h3 className='text-sm font-bold'>{brand}</h3>
            </div>

        </div>
    );
};

export default Phone;