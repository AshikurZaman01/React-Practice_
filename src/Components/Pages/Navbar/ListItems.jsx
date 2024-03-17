import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ListItems = ({ item }) => {
    return (
        <li>
            <Link to={item.path}>{item.name}</Link>
        </li>
    );
};

ListItems.propTypes = {
    item: PropTypes.object.isRequired
};

export default ListItems;
