import React from 'react';
import { useState } from 'react';
import Users from './Users';

const Home = () => {

    const [users, setUsers] = useState([
        {
            name: 'Rakibul Hasan',
            age: 25,
            email: 'rakibulhasan@gmail.com'
        },
        {
            name: 'Rakibul Hasan',
            age: 25,
            email: 'rakibulhasan@gmail.com'
        },
        {
            name: 'Rakibul Hasan',
            age: 25,
            email: 'rakibulhasan@gmail.com'
        }
    ]);

    const handleDeleteUser = (id) => {
        console.log(id);
    }

    return (
        <div>
            <Users users={users} handleDeleteUser={handleDeleteUser}></Users>
        </div>
    );
};

export default Home;