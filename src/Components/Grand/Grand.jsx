import Dad from './Dad/Dad';
import Uncle from './Uncle/Uncle';
import Aunty from './Aunty/Aunty';
import { createContext } from 'react';

export const AssetContext = createContext('Diamond');
export const GoldContext = createContext('14K');

const Grand = () => {

    return (
        <div className='border-2 border-gray-500 text-center p-5 text-3xl font-bold space-y-5'>
            <h1 className='underline'>Grand </h1>

            <section className='flex items-center justify-center'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grand;