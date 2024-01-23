
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

    return (
        <div>
            <div>
                <nav>
                    <ul>
                        {
                            routes.map(route => <li key={route.id}><a href={`${route.path}`}>{route.name}</a></li>)
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;