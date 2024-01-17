import React, { useEffect, useState } from 'react';
import Bottoles from './Bottoles';
import Cart from './Cart';

const Home = () => {

    const [bottoles, setBottoles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottoles.json')
            .then(res => res.json())
            .then(data => setBottoles(data))
            .catch(err => console.log(err))
    }, [])


    const handleAddToCart = (bottole) => {
        const name = bottole.brand;
        const price = bottole.price;

        const newCart = [...cart, { name, price }]
        setCart(newCart);
    }

    return (
        <div className='flex justify-between'>

            <div className='w-[80%]'>
                <div className='grid grid-cols-3 gap-2'>
                    {
                        bottoles.map((bottole, indx) => <Bottoles key={indx} bottole={bottole}
                            handleAddToCart={handleAddToCart}></Bottoles>)
                    }
                </div>
            </div>

            <div className='w-[20%]'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Home;