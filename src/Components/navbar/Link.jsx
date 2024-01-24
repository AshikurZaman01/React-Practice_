import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <div className='m-4 border-b-[1px]'>
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;