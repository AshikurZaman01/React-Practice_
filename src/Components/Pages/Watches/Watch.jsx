import { Link } from "react-router-dom";

const Watch = ({ watch }) => {


    const { id, model, brand, price, water_resistance, case_material } = watch || {};



    return (
        <div className="border border-dark w-[230px] p-5 text-center rounded m-2 font-semibold shadow-lg">
            <div>
                <h1>{model}</h1>
                <Link to={`/watch/${id}`} ><button className="btn btn-sm w-full btn-secondary my-3">Show Details</button></Link>
            </div>
        </div>
    );
}

export default Watch;
