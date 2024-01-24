import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ route }) => {

    return (
        <div>
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};


Link.propTypes = {
    route: PropTypes.object.isRequired,

}

export default Link;