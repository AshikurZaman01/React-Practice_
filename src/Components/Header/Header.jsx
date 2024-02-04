
const Header = () => {

    const items = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/help', name: 'Help' },
    ]

    return (
        <div>
            <div>
                <ul>
                    {
                        items.map(item => {
                            return (
                                <li key={item.id}><a href={item.path}>{item.name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;