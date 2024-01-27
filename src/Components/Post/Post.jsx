import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const { id, title } = post || {};

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="w-[250px] mx-auto ">

            <div className="bg-yellow-200 p-5 text-justify font-bold uppercase">
                <h1>{title}</h1>

                <button className="mt-5 btn btn-sm btn-success"><Link to={`/post/${id}`}>View Details</Link></button>

                <button onClick={handleShowDetails}>Show Details</button>
            </div>
        </div>
    );
};

export default Post;