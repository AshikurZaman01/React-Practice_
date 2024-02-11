import Cousine from './Cousine';

const Uncle = () => {
    return (
        <div className='border-2 border-red-400 rounded-md w-[40%] p-5'>
            Uncle

            <section className='flex flex-wrap justify-center items-center my-5 gap-5'>
                <Cousine name={'Rafsan'}></Cousine>
                <Cousine name={'Pori Moni'}></Cousine>
                <Cousine name={'Sabnoor'}></Cousine>
            </section>
        </div>
    );
};

export default Uncle;