import { useEffect, useState } from "react";
import Expert from "./Expert";

const Experts = () => {

    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])


    return (
        <div className="container mx-auto mb-10">

            <div className="mt-20 mb-20 text-center text-4xl font-extrabold">
                <h1>Gaming Experts</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    experts.map((expert, indx) => <Expert key={indx} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;