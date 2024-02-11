
const Cousine = ({ name, asset }) => {
    console.log(asset , name);
    return (
        <div className="border border-yellow-500 p-4">
            <h1>Cousine</h1>
            <h3 className="text-2xl text-blue-600">{name}</h3>
        </div>
    );
};

export default Cousine;