import React from 'react';

const Users = ({ users, handleDeleteUser }) => {

    const handleDelete = id => {
        handleDeleteUser(id);
    }

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-semibold'>All Users</h1>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {users.map((user, index) => <tr key={user.id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td><button onClick={() => handleDelete(index)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Users;