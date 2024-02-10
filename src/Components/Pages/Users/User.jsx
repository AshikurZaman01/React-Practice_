import { Link } from "react-router-dom";

const User = ({ user }) => {

    const { id, username, image, university, email, phone, birthDate, age, address } = user || {};

    return (
        <div className="p-3 shadow-lg shadow-gray-500 w-[250px] mx-auto text-center rounded-md hover:shadow-gray-50 hover:shadow transition-all cursor-pointer">
            <div className="w-[200px] h-auto">
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-bold uppercase text-blue-500">{username}</h1>
                <h3 className="text-2xl font-semibold">{email}</h3>
                <h3 className="text-2xl font-semibold">{phone}</h3>
            </div>

            <div>
                <Link to={`/user/${id}`}>
                    <button className="btn  btn-sm btn-success my-5">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default User;