import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const userDetails = useLoaderData();

    const { name, username, phone, website, email, address } = userDetails || {};

    return (
        <div className="w-[300px] bg-yellow-200 text-center p-5">
            <div>
                <h1>Name : {name}</h1>
                <h2>UserName : {username}</h2>
                <h2>Email : {email}</h2>
                <h2>Website : {website}</h2>
                <p>
                    <span>City : {address.city}</span>
                    <span>street : {address.street}</span>
                </p>
            </div>
        </div>
    );
};

export default UserDetails;