import { Link } from "react-router-dom";

const User = ({ user }) => {


    const { id, name, username, website, address, company } = user || {};


    return (
        <div>
            <div className="w-[200px] bg-red-400 mx-auto text-center p-5 rounded">
                <h1>{name}</h1>

                <Link to={`/user/${id}`}><button className="mt-5 btn btn-sm btn-success ">Show More</button></Link>
            </div>
        </div>
    );
};

export default User;