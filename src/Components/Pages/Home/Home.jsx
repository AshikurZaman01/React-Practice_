import { useState } from "react";
import Watches from "./Watches";
import { useEffect } from "react";


const Home = () => {

    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data))
            .catch(err => console.log(err))
    }, [])

    console.log(watches);

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