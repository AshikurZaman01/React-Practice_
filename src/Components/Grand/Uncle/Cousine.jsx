
const Cousine = ({ name, gift, uncleGift, goldGift }) => {
    return (
        <div className="border border-yellow-500 p-4">
            <h1>Cousine</h1>
            {
                gift && <p>{gift}</p>
            }
            {
                uncleGift && <p>{uncleGift}</p>
            }
            {
                goldGift && <p>Gold : {goldGift}</p>
            }
        </div>
    );
};

export default Cousine;