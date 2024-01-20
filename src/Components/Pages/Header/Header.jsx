
const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold capitalize">Knowledge Cafe</h1>
                <div className="w-[60px] h-[60px]">
                    <img className="w-full h-full bg-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWVufGVufDB8fDB8fHww" alt="" />
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Header;