import PropTypes from 'prop-types';

const Blog = ({ blog }) => {


    const { title, cover_img, author, author_img, posted_date, reading_time, hashtag } = blog || {};

    return (
        <div>

            <div className='w-[100%] h-[300px]'>
                <img className='w-full h-full rounded bg-cover' src={cover_img} alt="" />
            </div>

            <div className='py-5'>
                <div className='flex items-center gap-4'>
                    <div className='w-[50px] h-[50px]'>
                        <img className='w-full h-full rounded-full' src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <h6 className='font-medium text-gray-500'>{posted_date}</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;