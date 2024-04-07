import { useEffect, useState } from "react";
import Map from "../Map/Map";

const Home = () => {

    const [areaData, setAreaData] = useState([]);

    useEffect(() => {
        fetch('Area.json')
            .then(res => res.json())
            .then(data => setAreaData(data))
    }, [])


    return (
        <div>
            <Map areaData={areaData}></Map>
        </div>
    );
};

export default Home;