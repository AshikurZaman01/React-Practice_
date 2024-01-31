import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/contact', name: 'Contact' },
        { id: 3, path: '/help', name: 'Help' },
        { id: 4, path: '/about', name: 'About' },
        { id: 5, path: '/login', name: 'Login' }, // Add this line to include the login route in the header 
        { id: 6, path: '/signup', name: 'Sign Up' }, 
        { id: 7, path: '/dashboard', name: 'Dashboard' }, // Add this line to include the dashboard route in the header 
        { id: 8, path: '/profile', name: 'Profile' }, // Add this line to include the profile route in the header
    ]



    return (
        <div>

            <nav>
                <h1>Navbar</h1>

                <div onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[50px]">
                    {
                        isOpen ? <FaWindowClose /> : <MdOutlineMenuOpen />
                    }

                </div>

                <ul className={isOpen ? "" : 'md:flex hidden bg-blue-300 h-[80px] items-center gap-10 text-3xl font-bold mb-10 px-5 duration-1000 transition-all'}>
                    {
                        routes.map(route => {
                            return (
                                <li key={route.id}><a href={route.path}>{route.name}</a></li>
                            )
                        })
                    }
                </ul>
            </nav>

            {/* <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/help">Help</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav> */}

        </div >
    );
};

export default Header;