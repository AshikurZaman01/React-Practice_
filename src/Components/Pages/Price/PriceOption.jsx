const PriceOption = ({ pri }) => {
    const { name, price, features } = pri || {};

    return (
        <div className="mx-auto bg-purple-500 rounded-md px-8 py-4 text-yellow-200">
            <div>
                <h2 className="font-extrabold text-center">
                    <span className="text-7xl ">{price}</span>
                    <span className="text-3xl ">/mon</span>
                </h2>
                <h4 className="text-3xl py-4 text-gray-700 font-bold">{name}</h4>

                {
                    features.map((feature , indx) => {
                        return (
                            <p className="text-orange-700 font-semibold py-2" key={indx}>{feature}</p>
                        )
                    })
                }
            </div>
        </div>
    );
};






export default PriceOption;
