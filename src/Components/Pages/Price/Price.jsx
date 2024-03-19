import { useEffect } from "react";
import { useState } from "react";
import PriceOption from "./PriceOption";

const Price = () => {

    const [price, setPrice] = useState([]);
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrice(data.gym_prices))
    }, [])


    return (
        <div>
            <div className="mb-10">
                <h1 className="text-center text-secondary-focus capitalize text-4xl font-semibold mt-6">Best Prices in the town</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    price.map((pri, indx) => <PriceOption key={pri.id} pri={pri}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default Price;