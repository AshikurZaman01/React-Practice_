import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();
    const error = useRouteError();
    console.log("error", error);


    return (
        <div>
            <div>
                <h1 className="text-center text-4xl">{error.statusText || error.message}</h1>
                {
                    error.status === 400 || error.statusText && <div>
                        <h2 className="text-center text-2xl">Bad Request</h2>
                        <button onClick={() => navigate(-1)}>Go back</button>
                    </div>
                }
            </div>

        </div>
    );
};

export default ErrorPage;