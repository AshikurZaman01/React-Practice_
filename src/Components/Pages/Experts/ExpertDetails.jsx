import { useLoaderData, useParams } from "react-router-dom";

const ExpertDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();

    console.log(data);

    return (
        <div>
            Details
        </div>
    );
};

export default ExpertDetails;