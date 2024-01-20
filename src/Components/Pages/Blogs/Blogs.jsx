import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error(err))
    }, [])


    return (
        <div className="w-2/3">
            <div className="">
                {
                    blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;