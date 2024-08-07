import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const List = ({ route }) => {


    return (
        <div>
            <li><NavLink to={route.path}>{route.name}</NavLink></li>
        </div>
    );
}

export default List;
