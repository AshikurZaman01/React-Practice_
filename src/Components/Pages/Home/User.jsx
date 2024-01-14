const User = ({ friend }) => {

    const { name, username, email, phone } = friend || {}

    return (
        <div className="m-3 bg-green-300 p-2 rounded">
            <div>
                <h1>{name}</h1>
                <h2>{username}</h2>
                <h2>{email}</h2>
                <h2>{phone}</h2>
            </div>
        </div>
    )
}

export default User;