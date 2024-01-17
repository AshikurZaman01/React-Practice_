import Watches from "./Watches";


const Home = () => {

    const watches = [
        { name: 'Titan', price: 1500, color: 'black' },
        { name: 'HMT', price: 3000, color: 'black' },
        { name: 'Fossil', price: 2500, color: 'black' },
        { name: 'Timex', price: 4000, color: 'black' },
        { name: 'Titan', price: 1500, color: 'black' },

    ]

    return (
        <div>
            <h1>Watches Details</h1>

            <div className="grid grid-cols-2 gap-5">
                {
                    watches.map((watch, ind) => <Watches key={ind} watch={watch}></Watches>)
                }
            </div>

        </div>
    );
};

export default Home;