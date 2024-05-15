import { useEffect, useState } from "react"

export const displayData = () => {

    const [showData, setShowData] = useState([]);

    useEffect(() => {

        const getUserData = JSON.parse(localStorage.getItem("usersData") || '[]');
        setShowData(getUserData);

    }, [])

    return showData;

}