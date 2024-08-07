import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const WatchDetails = () => {
    const watch = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const findWatch = watch.find((watch) => watch.id === parseInt(id))

    if (!watch) {
        return <div>Watch not found</div>;
    }

    return (
        <div>
            <h1>{findWatch.model}</h1>
            <p>Brand: {findWatch.brand}</p>
            <p>Price: ${findWatch.price}</p>
            <p>Water Resistance: {findWatch.water_resistance}</p>
            <p>Case Material: {findWatch.case_material}</p>

            <button className='btn btn-sm btn-error capitalize' onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default WatchDetails;
