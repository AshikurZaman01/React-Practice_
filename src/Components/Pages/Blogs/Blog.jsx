import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmark }) => {
    const { title, cover_img, author, author_img, posted_date, reading_time, hashtag } = blog || {};
    const [isBookmarked, setBookmarked] = useState(false);

    const handleBookmarkClick = () => {
        setBookmarked(!isBookmarked);
        handleBookmark(blog); 
    };

    return (
        <div className='shadow shadow-gray-400 p-10'>
            <div className='w-[100%] h-[300px]'>
                <img className='w-full h-full rounded bg-cover' src={cover_img} alt="" />
            </div>

            <div className='flex justify-between items-center'>
                <div className='py-5'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[50px] h-[50px]'>
                            <img className='w-full h-full rounded-full' src={author_img} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-bold'>{author}</h4>
                            <h6 className='font-medium text-gray-500'>{posted_date}</h6>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-xl'>
                    <h4 className='text-gray-500 font-normal'>{reading_time} min read</h4>
                    <span
                        onClick={handleBookmarkClick}
                        className={`cursor-pointer btn btn-sm ${isBookmarked ? "bg-red-500" : ""}`}
                    >
                        <FaRegBookmark />
                    </span>
                </div>
            </div>

            <div className='pb-10'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='py-3'>
                    {
                        hashtag.map(hash => <span className='bg-gray-200 px-2 py-1 rounded-full text-gray-500 font-medium mr-2' key={hash}>{hash}</span>)
                    }
                </p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
};

export default Blog;
