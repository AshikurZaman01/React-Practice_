import React, { useContext } from 'react';
import { GoldContext } from '../Grand';

const Sister = () => {
    const goldGift = useContext(GoldContext);
    return (
        <div className='border-blue-400 border-2 p-3'>
            Sister

            {
                goldGift && <div>Gold Gift: {goldGift}</div>
            }
        </div>
    );
};

export default Sister;