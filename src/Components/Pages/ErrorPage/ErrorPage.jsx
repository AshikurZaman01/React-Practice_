import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();


    return (
        <div>
            <h1 className="text-center text-4xl">Page Not Found</h1>

            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default ErrorPage;