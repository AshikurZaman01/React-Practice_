import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div>
            {
                error.status === 404 && <div>
                    <h3 className="text-4xl text-center font-bold">Page Not Found</h3>
                    <button onClick={() => navigate(-1)} className="btn btn-success">Go Back</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;