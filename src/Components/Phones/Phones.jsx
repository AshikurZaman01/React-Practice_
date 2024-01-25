import { useEffect, useState } from "react";
import Phone from "./Phone";
import axios from "axios";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))
        //     .catch(err => console.log(err))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => {
                const phoneData = res.data.data;

                const FakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(FakeData);
                setPhones(FakeData);


            })

    }, [])





    return (
        <div>
            <BarChart width={500} height={200} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis data={name}></XAxis>
            </BarChart>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {
                    phones.map((phone, indx) => <Phone key={indx} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;