import { useState } from "react";
import List from "./List";

const Navbar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/watches', name: 'Watches' },
        { id: 3, path: '/about', name: 'About' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/Blog', name: 'Blog' }
    ]

    const [open, setOpen] = useState(false);

    return (
        <div>

            <div>
                <nav>

                    <div className="sm:hidden" onClick={() => setOpen(!open)}>
                        {
                            open ?
                                <button className="btn btn-sm btn-error">Close</button>
                                :
                                <button className="btn btn-sm btn-primary">Open</button>
                        }
                    </div>

                    <ul className={`md:flex justify-start items-center text-3xl font-semibold gap-5 ${open ? '' : 'hidden'}`}>
                        {
                            routes.map((route) => <List key={route.id} route={route}></List>)
                        }
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export default Navbar;
