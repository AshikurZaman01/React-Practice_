import { Link, useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {

    const users = useLoaderData();




    return (
        <div>
            <div>
                <h1> All Users : {users.length}</h1>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 text-white font-bold my-10">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;