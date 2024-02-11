import React, { useContext } from 'react';
import Cousine from '../Uncle/Cousine';
import { AssetContext } from '../Grand';

const Aunty = () => {

    const gift = useContext(AssetContext);

    return (
        <div className='border-2 border-red-400 rounded-md w-[40%] p-5'>
            Aunty

            <section className='flex flex-wrap justify-center items-center my-5 gap-5'>
                <Cousine name={'Nori'}></Cousine>
                <Cousine name={'Alli'}></Cousine>
                <Cousine gift={gift} name={'Malia'}></Cousine>
            </section>
        </div>
    );
};

export default Aunty;