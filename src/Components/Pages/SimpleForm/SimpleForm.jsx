import { useState } from "react";

const SimpleForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

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
        <div className='my-10'>
            <h1>Handle Form</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input onChange={handleName} type="text" name="name" id="" placeholder='Enter Name' />
                <br /><br />
                <label htmlFor="">Email</label>
                <input onChange={handleEmail} type="text" name="email" id="" placeholder='Enter Email' />
                <br /><br />
                <label htmlFor="">Password</label>
                <input onChange={handlePassword} type="text" name="password" placeholder='Password' id="" />
                <br /><br />
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default SimpleForm;