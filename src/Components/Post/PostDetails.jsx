import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const postDetails = useLoaderData();
    const { title, body } = postDetails || {}

    const { postId } = useParams();
    console.log(postId);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="w-[500px] bg-red-200 mx-auto">
            <div>
                <h1 className="text-center text-3xl capitalize font-bold py-5 px-10">{title}</h1>

                <div className="p-5 bg-green-200 m-5 ">
                    <h4 className="text-justify text-xl capitalize ">{body}</h4>

                    <button className="btn btn-success" onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;