import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PhoneData from "./PhoneData";

const Phone = () => {

    const [phones, setPhones] = useState([]);

    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(res => res.json())
    //         .then(data => setPhones(data.data))
    // }, [])

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => setPhones(data.data.data))
    }, [])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    phones.map((phone, indx) => <PhoneData key={indx} phone={phone}></PhoneData>)
                }
            </div>
        </div>
    );
};

export default Phone;