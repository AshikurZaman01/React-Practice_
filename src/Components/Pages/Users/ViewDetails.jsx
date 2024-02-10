import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ViewDetails = () => {

    const navigate = useNavigate();
    const data = useLoaderData();
    const { idd } = useParams();
    const { id, username, image, university, email, phone, birthDate, age, address } = data || {};

    return (
        <div>
            <div className="p-3 shadow-lg shadow-gray-500 w-[250px] mx-auto text-center rounded-md hover:shadow-gray-50 hover:shadow transition-all cursor-pointer">
                <div className="w-[200px] h-auto">
                    <img className="w-full h-full" src={image} alt="" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold uppercase text-blue-500">{username}</h1>
                    <h3 className="text-2xl font-semibold">{email}</h3>
                    <h3 className="text-2xl font-semibold">{phone}</h3>
                </div>

                <button className="btn btn-sm bg-red-400" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default ViewDetails;