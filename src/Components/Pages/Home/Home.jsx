import { useRef } from "react";
import Form from "./Form";

const Home = () => {

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <Form nameRef={nameRef} ageRef={ageRef} passwordRef={passwordRef} title={"Login Here"} btnSubmit="Login" handleSubmit={handleLoginSubmit}></Form>
        </div>
    );
};

export default Home;