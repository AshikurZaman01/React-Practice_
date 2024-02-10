import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const navItems = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/help', name: 'Help' },
        { id: 5, path: '/users', name: 'Users' }
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            <nav>
                <div className="text-3xl md:hidden m-10 " onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <FaRegWindowClose /> : <CiMenuFries />
                    }

                </div>
                <ul className={` md:flex text-3xl font-bold gap-10 m-5 ${isOpen ? '' : 'hidden'}`}>
                    {
                        navItems.map(item => {
                            return (
                                <li key={item.id}><Link to={item.path}>{item.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;