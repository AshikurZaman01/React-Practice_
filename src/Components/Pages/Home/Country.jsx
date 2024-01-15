
const Country = ({ country }) => {

    console.log(country);

    const { id, thumbnailUrl, title, url } = country || {};


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

            </div>
        </div>
    );
};

export default Country;