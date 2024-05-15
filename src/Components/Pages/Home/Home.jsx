import { displayData } from "./localStorage/DisplayData";
import { handleFormSubmit } from "./localStorage/HandleForm";

const Home = () => {




    const showData = displayData();

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

                <div className="w-[50%] mx-auto my-10">
                    <table className=" border border-collapse border-slate-500 w-full text-center">
                        <thead>
                            <tr>
                                <th className="border border-slate-500">Name</th>
                                <th className="border border-slate-500">Email</th>
                                <th className="border border-slate-500">Update</th>
                                <th className="border border-slate-500">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                showData.map((data, indx) => {
                                    return (
                                        <tr key={indx}>
                                            <td className="border border-slate-500">{data.name}</td>
                                            <td className="border border-slate-500">{data.email}</td>

                                            <td>
                                                <div className="border-r border-b border-slate-500">
                                                    <button className="btn btn-sm btn-primary m-1">Update</button>
                                                </div>
                                            </td>

                                            <td>
                                                <div className=" border-b border-slate-500">
                                                    <button className="btn btn-sm btn-error text-white m-1">Delete</button>
                                                </div>
                                            </td>

                                        </tr>


                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Home;