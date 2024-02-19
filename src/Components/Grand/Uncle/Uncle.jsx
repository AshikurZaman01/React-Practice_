import { useContext } from 'react';
import Cousine from './Cousine';
import { AssetContext, GoldContext } from '../Grand';

const Uncle = () => {

    const uncleGift = useContext(AssetContext);
    const goldGift = useContext(GoldContext);

    return (
        <div className='border-2 border-red-400 rounded-md w-[40%] p-5'>
            Uncle

            <section className='flex flex-wrap justify-center items-center my-5 gap-5'>
                <Cousine name={'Rafsan'}></Cousine>
                <Cousine uncleGift={uncleGift} name={'Pori Moni'}></Cousine>
                <Cousine goldGift={goldGift} name={'Sabnoor'}></Cousine>
            </section>
        </div>
    );
};

export default Uncle;