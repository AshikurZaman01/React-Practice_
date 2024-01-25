import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;