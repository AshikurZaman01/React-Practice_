import { useState } from "react";
import useInputState from "./useInput";

const SimpleForm = () => {

    const [name, handleName] = useInputState('');
    const [email, handleEmail] = useInputState('');
    const [password, handlePassword] = useInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }


    return (
        <div className="my-10">
            <h1>Handle Form</h1>

            <div className="border border-red-400 p-10">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label><br />
                    <input value={name} onChange={handleName} type="text" name="name" id="" placeholder="Enter Your Name" /><br /><br />

                    <label htmlFor="">Email</label><br />
                    <input value={email} onChange={handleEmail} type="text" name="email" placeholder="Enter Your Email" id="" />
                    <br /><br />

                    <label htmlFor="">Password</label><br />
                    <input value={password} onChange={handlePassword} type="text" name="password" id="" placeholder="Enter Password" /><br /><br />

                    <button type="submit" className="btn btn-success btn-sm">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SimpleForm;