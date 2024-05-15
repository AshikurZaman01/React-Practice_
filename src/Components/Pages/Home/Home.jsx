import { handleFormSubmit } from "./localStorage/HandleForm";

const Home = () => {



    return (
        <div>

            <div>
                <h1 className='text-center text-4xl font-bold my-4'>Input Details</h1>

                <div className='flex justify-center items-center my-5'>
                    <form onSubmit={handleFormSubmit} className='w-[400px]'>
                        <input type="text" name="name" placeholder='Enter Your Name' className="input input-bordered w-full max-w-xs" />
                        <br />
                        <input type="text" name="email" placeholder='Enter Your Email' className="input input-bordered w-full max-w-xs" />
                        <br />
                        <button type='submit' className='btn btn-primary w-full max-w-xs mt-2'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Home;