import React, { useState } from 'react';
import Country from './Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])

    useState(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data.slice(0, 20)))
    }, [])


    const handleVisitedCountries = (country) => {

        console.log(country.name.common);
        const newVisitedCountries = [...visitedCountries, countries];
        setVisitedCountries(newVisitedCountries);

        console.log(visitedCountries);
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h3>Visited Countries : {visitedCountries.length}</h3>
            <div>
                {
                    countries.map(country => <Country country={country}
                        key={country.id}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;