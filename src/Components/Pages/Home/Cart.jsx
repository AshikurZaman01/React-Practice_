import React from 'react';

const Cart = ({ cart }) => {

    console.log(cart);

    return (
        <div className='bg-blue-200 h-[500px]'>
            <h1 className='text-3xl text-center my-4'>Cart</h1>

            <div>
                {
                    cart.map((item, ind) => {
                        return (
                            <div key={ind} className='flex justify-between'>
                                <p>{ind + 1}</p>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center items-end'>
                <button className='btn btn-error btn-sm my-5'>Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;