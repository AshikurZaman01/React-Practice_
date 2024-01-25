import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold">Navbar</h1>
            </div>

            <div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/users'}>Users</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;