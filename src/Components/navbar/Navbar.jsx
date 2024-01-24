import { useState } from "react";
import Link from "./Link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/login', name: 'Login' },
        { id: 5, path: '/register', name: 'Register' },
        { id: 6, path: '/blog', name: 'Blog' },
        { id: 7, path: '/single-blog', name: 'Single Blog' },
    ]

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav>

                <div onClick={() => setOpen(!open)}>
                    {
                        open === true ? <IoMdClose className="text-3xl md:hidden" /> : <IoMdMenu className="text-3xl md:hidden" />
                    }
                </div>

                <ul className="md:flex text-2xl font-semibold gap-6">
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;