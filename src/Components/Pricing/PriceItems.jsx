
const PriceItems = ({ item }) => {


    const { name, price, desc, features } = item;

    return (
        <div className="mx-auto bg-blue-300 px-10 py-3 rounded">

            <div>
                <h1 className="text-3xl text-purple-700 font-bold">{name}</h1>
            </div>

            <div>
                <h4 className="text-center mt-5 text-4xl font-bold">{price}</h4>
            </div>
            <div>
                <h4 className="mt-5 font-bold">{desc}</h4>
            </div>
            <div>
                {
                    features.map((feature, item) => <li key={item} className="list-disc ml-5">{feature}</li>)
                }
            </div>

        </div>
    );
};

export default PriceItems;