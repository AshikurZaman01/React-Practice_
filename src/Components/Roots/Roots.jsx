import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Roots = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>

            {
                navigation.state === 'loading' ? <div>
                    <p>Loading</p>
                </div> :
                    <Outlet></Outlet>
            }

        </div>
    );
};

export default Roots;