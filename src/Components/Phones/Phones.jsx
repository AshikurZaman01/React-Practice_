import { useEffect, useState } from "react";
import Phone from "./Phone";

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => setPhones(data.data))
            .catch(err => console.log(err))
    }, [])

    console.log(phones)

    return (
        <div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1">
                {
                    phones.map((phone, indx) => <Phone key={indx} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;