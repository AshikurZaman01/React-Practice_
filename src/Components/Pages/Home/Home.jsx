import { UserContextProvider } from "./Context/UserContextProvider";
import Login from "./Login";

const Home = () => {
    return (
        <UserContextProvider>
            <div>
                <Login></Login>
            </div>
        </UserContextProvider>
    );
};

export default Home;