import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const rr = useRouteError();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="text-center space-y-5">
                <h1 className="text-5xl text-center font-bold">Opps</h1>
                <h2 className="font-bold text-red-500">{rr.status}</h2>
                <h2 className="font-bold text-blue-500">{rr.statusText}</h2>

                <button onClick={handleGoBack} className="btn btn-sm btn-error">Go Back</button>
            </div>
        </div>
    );
}

export default ErrorPage;
