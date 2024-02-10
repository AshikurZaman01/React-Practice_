
const PhoneData = ({ phone }) => {


    const { phone_name, brand, image } = phone || {};

    return (
        <div className="w-[250px] p-2 rounded-md mx-auto border border-gray-400">
            <div className="w-[200px] h-auto">
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <div className="my-5 text-center">
                <h1 className="text-3xl font-bold">{phone_name}</h1>
                <h4 className="text-2xl font-bold text-gray-500">{brand}</h4>
            </div>
        </div>
    );
};

export default PhoneData;