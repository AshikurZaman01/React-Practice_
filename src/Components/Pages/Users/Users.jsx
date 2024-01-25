import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

    console.log(users)



    return (
        <div>
            users
            <div>
                {
                    users.map((user, indx) => {
                        return (
                            <div className="bg-red-500 my-4" key={indx}>
                                <li>{user.name}</li>
                                <li>{user.username}</li>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Users;