
const Home = () => {


    return (
        <div className="flex justify-center items-center min-h-screen text-center">
            <div className="w-[250px] mx-auto shadow-md ring-2 p-2 rounded">
                <div>
                    <img width={100} className="h-[100px] mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1709973540503-77d699279634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
                </div>

                <div>
                    <h1 className="text-xl font-bold">Learn with Summit</h1>
                    <p className="font-semibold">YouYube Channel</p>
                </div>
                <div>
                    <button className="btn btn-sm bg-transparent hover:bg-gray-300 transition-all">Visit Now <span>+</span></button>
                </div>
            </div>

        </div>
    );
};

export default Home;