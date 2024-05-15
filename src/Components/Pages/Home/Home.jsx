import React from "react";

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="Enter Price" />
                <input type="text" name="products" placeholder="Enter Number of Products" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
