
const Home = () => {
    return (
        <div>
            <Student />
        </div>
    );
};


const Student = ({ age }) => {
    age = 30;
    return (
        <div>
            <h1>Hello World</h1>
            <h3>I am  a student</h3>
            <h4>i am {age} years old</h4>
        </div>
    )
}

export default Home;