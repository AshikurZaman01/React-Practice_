import React, { useState } from 'react';
import Country from './Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useState(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data.slice(0, 40)))
    }, [])


    return (
        <div>
            <h1>Countries</h1>
            <div>
                {
                    countries.map(country => <Country country={country} key={country.id}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;