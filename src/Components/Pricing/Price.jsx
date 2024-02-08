import PriceItems from "./PriceItems";

const Price = () => {

    const priceItems = [
        {
            id: 1,
            name: 'Basic',
            price: 9,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia',
            features: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ]
        },
        {
            id: 2,
            name: 'Standard',
            price: 19,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia',
            features: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ]
        },
        {
            id: 3,
            name: 'Premium',
            price: 29,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia',
            features: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ]
        }
    ]

    return (
        <div>

            <div className="grid grid-cols-3 gap-5">
                {
                    priceItems.map(item => <PriceItems key={item.id} item={item}></PriceItems>)
                }
            </div>

        </div>
    );
};

export default Price;