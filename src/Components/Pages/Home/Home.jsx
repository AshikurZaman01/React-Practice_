import { useState } from "react";

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const age = e.target.age.value;

        console.log(name, age);
    }

    const [open, isOpen] = useState(false)


    return (
        <div>

            <form onSubmit={handleSubmit} className="bg-blue-300 w-[400px] flex flex-col mx-auto mt-10 rounded-md p-4">
                <label className="" htmlFor="">Enter Name</label>
                <input type="text" name="name" className="rounded-md" id="" /><br />

                <input type="number" name="age" id="" /><br />

                <input type={`${open ? "text" : "password"}`} name="password" id="" />
                <button onClick={() => isOpen(!open)} className="btn btn-sm btn-error w-[100px]">Show Password</button><br />

                <button type="submit" className="btn btn-sm btn-accent">Submit</button>
            </form>

        </div>
    );
};

export default Home;