import { useContext } from "react";
import { AssetContext } from "../../Grand";

const Special = () => {

    const gift = useContext(AssetContext)

    console.log(gift)

    return (
        <div className='border-yellow-500 border-2 p-3'>
            Special
            <p>{gift}</p>
        </div>
    );
};

export default Special;