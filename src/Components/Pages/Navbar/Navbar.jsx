import { Link } from "react-router-dom";
import ListItems from "./ListItems";

const Navbar = () => {

    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Help", path: "/help" },
        { id: 5, name: "Login", path: "/login" },
        { id: 6, name: "Register", path: "/register" },

    ]

    return (
        <div>
            <nav>
                <ul className="md:flex md:items-center py-5 px-5 gap-x-6 bg-slate-900 text-white">
                    {
                        navItems.map((item, indx) => <ListItems key={indx} item={item}></ListItems>)
                    }
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;