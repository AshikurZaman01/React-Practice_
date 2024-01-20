import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='container mx-auto p-4'>
            <div className='w-4/5 mx-auto'>
                <div>
                    <Header></Header>
                </div>

                <div className='md:flex gap-6'>
                    <Blogs></Blogs>
                    <Bookmarks></Bookmarks>
                </div>
            </div>
        </div>
    );
};

export default Home;