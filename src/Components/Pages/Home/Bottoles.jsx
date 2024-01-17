import React from 'react';

const Bottoles = ({ bottole, handleAddToCart }) => {


    const { brand, image, color, capacity, material, price } = bottole || {}

    return (
        <div>

            <div className='border rounded w-[202px] border-gray-900 mx-auto'>
                <div className='w-[200px] h-[200px]'>
                    <img className='w-full h-full bg-cover rounded-md' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-bold text-center py-2'>{brand}</h1>
                    <p className='text-center py-2'>{color}</p>
                    <p className='text-center py-2'>{capacity}</p>
                    <p className='text-center py-2'>{material}</p>
                    <p className='text-center py-2 font-bold'>{price}</p>
                </div>

                <div className='flex justify-center'>
                    <button onClick={() => { handleAddToCart(bottole) }} className='btn btn-sm btn-success'>Purchase</button>
                </div>

            </div>

        </div>
    );
};

export default Bottoles;