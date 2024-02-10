import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => setUsers(res.data.users))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <h1 className="text-center my-10 text-4xl font-bold text-gray-600">All Users Here</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;