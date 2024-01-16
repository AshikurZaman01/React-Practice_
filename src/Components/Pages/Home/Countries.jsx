import React, { useState } from 'react';
import Country from './Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [countVisited, setCountVisited] = useState([]);
    const [countriesName, setCountriesName] = useState([]);

    useState(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data.slice(0, 20)))
    }, [])

    const handleVisitedCountries = (country) => {
        const newVisited = [...countVisited, countries];
        setCountVisited(newVisited);

    }


    const handleCisitedCountriesName = (country) => {
        const name = country.name.common;
        console.log(name);
        const newName = [...countriesName, name];
        setCountriesName(newName);
    }



    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h3>Total Visited Countries : {countVisited.length}</h3>
            <h3>Visited Countries Name : {countriesName}</h3>
            <div>
                {
                    countries.map((country, index) => <Country country={country}
                        key={index}
                        handleVisitedCountries={handleVisitedCountries}
                        handleCisitedCountriesName={handleCisitedCountriesName}

                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;