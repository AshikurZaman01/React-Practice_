import React, { useContext, useState } from 'react';
import { UserContext } from './Context/UserContext';

const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({ name, password })

    }

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>

            <div>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)} type="text" name="name" id="" placeholder='Enter Your Name' />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text" name="pasword" id="" placeholder='Password' />

                <button onClick={handleSubmit} type='submit' className='btn btn-sm btn-primary'>Enter</button>

            </div>

        </div>
    );
};

export default Login;