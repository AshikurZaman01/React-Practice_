import { Link } from "react-router-dom";
import { BsMenuButtonFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {

    const [isOpen, setOpen] = useState(false);

    const items = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/help', name: 'Help' },
    ]

    return (
        <div>
            <nav>

                <div className="text-4xl md:hidden m-5" onClick={() => setOpen(!isOpen)}>
                    {
                        isOpen ? <MdRestaurantMenu></MdRestaurantMenu> : <BsMenuButtonFill></BsMenuButtonFill>
                    }
                </div>

                <ul className={isOpen ? "" : "md:flex gap-10 text-4xl font-bold hidden absolute"}>
                    {
                        items.map(item => {
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

export default Header;