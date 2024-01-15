import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {


    const { id, thumbnailUrl, title, url } = country || {};

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        console.log("visited this country");
    }


    return (
        <div>
            <div className="my-10">
                <p>{id}</p>

                <div>
                    <img src={country.flags.png} alt="" />
                </div>

                <div>
                    <h1><span className="font-bold">Name :</span> {country.name.common}</h1>
                    <h1><span className="font-bold">Capital :</span> {country.capital[0]}</h1>
                    <h1><span className="font-bold">Area :</span> {country.area}</h1>
                    <h1><span className="font-bold">Population :</span> {country.population}</h1>
                </div>

                <div>
                    <button onClick={() => { handleVisited(); handleVisitedCountries(country) }} className={visited ? "btn bg-green-500" : "btn bg-red-400"} >{visited ? "visited" : "Not Visited"}</button>
                </div>

            </div>
        </div>
    );
};

export default Country;