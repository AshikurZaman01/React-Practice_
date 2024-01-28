import { Link, NavLink } from "react-router-dom";
import style from "./style.css";

const Header = () => {

    const activeStyleUL = {
        backgroundColor: 'black',
        padding: '10px',
        color: 'red'
    }



    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold">Navbar</h1>
            </div>

            <div>
                <ul style={activeStyleUL} className="flex justify-center gap-10 my-10 font-bold text-2xl">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/help'}>Help</NavLink>
                    <NavLink to={'/posts'}>Post</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;