import PropTypes from 'prop-types';
import { CiBookmarkCheck } from "react-icons/ci";

const Bookmarks = ({ bookmark }) => {


    return (
        <div className="w-1/3 ">
            <div>
                <h1 className='text-3xl font-bold mb-5'>Bookmar : {bookmark.length}</h1>
            </div>

            <div>
                {
                    bookmark.map((book, indx) => {
                        return (
                            <div key={indx} className='flex items-center text-2xl font-semibold gap-2'>
                                <span className='text-red-500 '><CiBookmarkCheck /></span>
                                <p className=' text-gray-700' key={indx}>{book.title}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
}

export default Bookmarks;