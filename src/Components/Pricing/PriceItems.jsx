
const PriceItems = ({ item }) => {


    const { name, price, desc, features } = item;

    return (
        <div>

            <div>
                <h1>{name}</h1>
            </div>

        </div>
    );
};

export default PriceItems;