import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Bookmarks from "../Bookmarks/Bookmarks";
import PropTypes from "prop-types";


const Blogs = ({ handleBookmark }) => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error(err))
    }, [])


    return (
        <div className="w-2/3">
            <div className="grid gap-10">
                {
                    blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
                }
            </div>
        </div>
    );
};



export default Blogs;