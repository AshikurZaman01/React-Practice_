import { useRef } from "react";
import Form from "../Home/Form";

const Contact = () => {

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignSubmit = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            T<Form nameRef={nameRef} ageRef={ageRef} passwordRef={passwordRef} title={"Sign Up"} btnSubmit="Sign Up" handleSubmit={handleSignSubmit}></Form>
        </div>
    );
};

export default Contact;