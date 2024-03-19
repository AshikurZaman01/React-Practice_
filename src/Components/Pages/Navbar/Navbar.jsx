import ListItems from "./ListItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Help", path: "/help" },
        { id: 5, name: "Login", path: "/login" },
        { id: 6, name: "Register", path: "/register" },
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav>

                <div onClick={() => setIsOpen(!isOpen)} className=" md:hidden  text-3xl cursor-pointer text-red">
                    {
                        isOpen ? <IoMdCloseCircleOutline /> : <RxHamburgerMenu />
                    }
                </div>

                <ul className={`${isOpen ? "" : "hidden"}  md:flex md:justify-center md:items-center py-5 px-5 gap-x-6 bg-slate-900 text-white`}>
                    {
                        navItems.map((item, indx) => <ListItems key={indx} item={item}></ListItems>)
                    }
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;