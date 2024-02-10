import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Roots = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state ? <Outlet></Outlet> : <p>Loading</p>
            }

        </div>
    );
};

export default Roots;