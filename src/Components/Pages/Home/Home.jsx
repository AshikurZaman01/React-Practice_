import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = e.target.id.value;
        const productsName = e.target.products.value;

        if (isNaN(id) && !isNaN(productsName)) {
            alert('please enter a valid number')
        }
        else {
            const dataArray = JSON.parse(localStorage.getItem('data') || '[]');

            const newData = {
                id: id,
                product: productsName
            }

            dataArray.push(newData);
            localStorage.setItem('data', JSON.stringify(dataArray));
        }
    }

    const [showData, setShowData] = useState([]);
    useEffect(() => {

        const dataArray = JSON.parse(localStorage.getItem('data') || '[]');
        setShowData(dataArray);
    }, [])


    const handleDelete = (id) => {

        const newDataArray = showData.filter((data, indx) => indx !== id);
        localStorage.setItem('data', JSON.stringify(newDataArray));
        setShowData(newDataArray);


    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="Enter Price" />
                <input type="text" name="products" placeholder="Enter Number of Products" />
                <button type="submit">Submit</button>
            </form>

            <div className="mt-10">
                {
                    showData.map((data, indx) => {
                        return (
                            <div key={indx} >
                                <ul className="flex gap-5">
                                    <li>Price :{data.id}</li>
                                    <li>P.Name : {data.product}</li>
                                    <button onClick={() => handleDelete(indx)} className="btn btn-sm btn-primary">Edit</button>
                                </ul>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default Home;
