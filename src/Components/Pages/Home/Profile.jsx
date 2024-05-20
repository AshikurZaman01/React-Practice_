import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext';

const Profile = () => {

    const { user } = useContext(UserContext);

    if(!user)
        {
            return <div>Please Login</div>
        }else
        {
            return <div>Welcome {user.name}</div>
        }
};

export default Profile;