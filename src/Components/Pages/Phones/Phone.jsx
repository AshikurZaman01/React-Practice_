import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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

    console.log(phones);

    return (
        <div>

        </div>
    );
};

export default Phone;