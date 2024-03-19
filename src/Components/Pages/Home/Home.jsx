import { useRef, useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const Home = () => {

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        console.log(passwordRef.current.value);
    }

    const [view, setView] = useState(false);

    return (
        <div className="flex justify-center items-center h-[80vh] ">

            <form onClick={handleSubmit} className="w-[300px] bg-blue-300 p-5">

                <div className="flex flex-col">
                    <label htmlFor="" className="text-slate-900">Name</label>
                    <input ref={nameRef} type="text" name="" id="" placeholder="Enter Name" className="rounded-sm p-1" />
                </div><br />

                <div className="flex flex-col">
                    <label htmlFor="" className="text-slate-900">Age</label>
                    <input ref={ageRef} type="number" name="" id="" placeholder="Enter Age" className="rounded-sm p-1" />
                </div><br />

                <div className="flex flex-col relative">
                    <label htmlFor="" className="text-slate-900">Password</label>
                    <input ref={passwordRef} type={`${view ? "text" : "password"}`} name="" id="" placeholder="Enter Password" className="rounded-sm p-1 " />
                    <span onClick={() => setView(!view)} className="absolute right-2 top-10 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500  w-6 z-40 flex justify-center">
                        {
                            view ? <LuEye /> : <LuEyeOff />
                        }
                    </span>
                </div><br />

                <div>
                    <button className="btn btn-sm w-full btn-info">Submit</button>
                </div>

            </form>

        </div>
    );
};

export default Home;