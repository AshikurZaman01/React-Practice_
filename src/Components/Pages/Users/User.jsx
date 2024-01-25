import { Link } from "react-router-dom";

const User = ({ user }) => {


    const { id, name, username, website, address, company } = user || {};


    return (
        <div>
            <div className="w-[200px] bg-red-400 mx-auto text-center p-5 rounded">
                <h1>{name}</h1>

                <button className="btn btn-sm btn-secondary"><Link to={`/user/${id}`}>Show More</Link></button>
            </div>
        </div>
    );
};

export default User;