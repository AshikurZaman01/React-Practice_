
const Watches = ({ watch }) => {

    console.log(watch)

    return (
        <div>
            <div className="bg-blue-300 w-[200px] text-center p-5">
                <h1 className="text-3xl font-bold">{watch.name}</h1>
                <h4 className="text-2xl font-serif">{watch.price}</h4>
                <p>{watch.color}</p>
            </div>
        </div>
    );
};

export default Watches;