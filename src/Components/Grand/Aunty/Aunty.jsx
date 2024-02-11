import React from 'react';
import Cousine from '../Uncle/Cousine';

const Aunty = ({ asset }) => {
    return (
        <div className='border-2 border-red-400 rounded-md w-[40%] p-5'>
            Aunty

            <section className='flex flex-wrap justify-center items-center my-5 gap-5'>
                <Cousine name={'Nori'}></Cousine>
                <Cousine name={'Alli'}></Cousine>
                <Cousine asset={asset} name={'Malia'}></Cousine>
            </section>
        </div>
    );
};

export default Aunty;