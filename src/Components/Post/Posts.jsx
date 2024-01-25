import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {

    const posts = useLoaderData();

    const { id, title } = posts || {};


    return (
        <div>
            <div className="grid grid-cols-2 gap-5 ">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;