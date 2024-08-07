import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Watch from './Watch';


const Watches = () => {

    const watches = useLoaderData();

    return (
        <div>
            <div className='flex justify-center flex-wrap gap-5'>
                {
                    watches.map((watch) => <Watch key={watch.id} watch={watch}></Watch>)
                }
            </div>
        </div>
    );
}

export default Watches;
