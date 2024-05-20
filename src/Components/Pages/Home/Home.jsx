import { UserContextProvider } from "./Context/UserContextProvider";
import Login from "./Login";
import Profile from "./Profile";

const Home = () => {
    return (
        <UserContextProvider>
            <div>
                <Login></Login>
                <Profile></Profile>
            </div>
        </UserContextProvider>
    );
};

export default Home;