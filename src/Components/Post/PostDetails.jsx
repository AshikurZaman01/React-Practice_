import { useLoaderData } from "react-router-dom";

const PostDetails = () => {

    const postDetails = useLoaderData();

    console.log(postDetails);

    const { title, body } = postDetails || {}

    return (
        <div className="w-[500px] bg-red-200 mx-auto">
            <div>
                <h1 className="text-center text-3xl capitalize font-bold py-5 px-10">{title}</h1>

                <div className="p-5 bg-green-200 m-5 ">
                    <h4 className="text-justify text-xl capitalize ">{body}</h4>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;