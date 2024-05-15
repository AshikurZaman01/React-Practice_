import React from "react";

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.id.value);

        const idNum = e.target.id.value;

        if (isNaN(idNum)) {
            alert("Please enter a number")
        }
        else {
            localStorage.setItem("id", idNum);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
