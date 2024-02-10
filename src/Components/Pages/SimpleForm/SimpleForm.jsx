
const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log("Form submitted");
    }

    return (
        <div className="my-10">

            <h1>Form Handle</h1>
            <form onSubmit={handleSubmit} className="border bg-red-200">
                <input type="text" name="name" id="" placeholder="Name" />
                <br /><br />
                <input type="text" name="email" id="" placeholder="Email" />
                <br />
                <button className="btn btn-success" type="submit">Submit</button>
            </form>

        </div>
    );
};

export default SimpleForm;