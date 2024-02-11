import Special from "./Special";

const Myself = ({ asset }) => {


    return (
        <div className='border-blue-400 border-2 p-3'>
            My self

            <div>
                <Special asset={asset}></Special>
            </div>
        </div>
    );
};

export default Myself;