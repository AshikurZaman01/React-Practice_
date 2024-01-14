import { useEffect } from "react";
import { useState } from "react";
import User from "./User";

const Friends = () => {

    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])



    return (
        <div>
            <div>
                {
                    friends.map((friend) => <User friend={friend} key={friend.id}></User>)
                }
            </div>
        </div>
    )
}

export default Friends;


