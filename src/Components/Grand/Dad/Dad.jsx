import Brother from './Brother';
import Myself from './MySelf/Myself';
import Sister from './Sister';

const Dad = ({ asset }) => {


    return (
        <div className='border-2 border-red-400 rounded-md w-[40%] p-5'>
            Dad

            <section className='flex flex-wrap justify-center items-center my-5 gap-5'>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;