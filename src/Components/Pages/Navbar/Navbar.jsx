import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = [
        { id: 1, name: 'Statistics', path: '/' },
        { id: 2, name: 'Applied Jobs', path: '/appliedJobs' },
        { id: 3, name: 'Blog', path: '/blog' },
    ]

    return (
        <div className="container mx-auto flex items-center justify-between h-24">

            <div>
                <h1 className="text-4xl font-bold font-sans">CareerHub</h1>
            </div>

            <div>
                <ul className="md:flex gap-10 text-2xl font-semibold text-blue-500">
                    {
                        navItems.map((item, indx) => (
                            <li key={indx}><NavLink to={item.path}>{item.name}</NavLink></li>
                        ))
                    }
                    <li><NavLink></NavLink></li>
                </ul>
            </div>

            <div>
                <button className="bg-blue-500 px-5 py-2 rounded-md text-white font-semibold">Star Applying</button>
            </div>

        </div>
    );
};

export default Navbar;