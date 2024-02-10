import { useState } from "react";

const SimpleForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="my-10">

            <h1>Form Handle</h1>
            <form onSubmit={handleSubmit} className="border bg-red-200">
                <input onChange={handleName} type="text" name="name" id="" placeholder="Name" />
                <br /><br />
                <input onChange={handleEmail} type="text" name="email" id="" placeholder="Email" />
                <br /><br />
                <input onChange={handlePassword} type="text" name="password" id="" placeholder="Pasword" />
                <br />
                <button className="btn btn-success" type="submit">Submit</button>
            </form>

        </div>
    );
};

export default SimpleForm;