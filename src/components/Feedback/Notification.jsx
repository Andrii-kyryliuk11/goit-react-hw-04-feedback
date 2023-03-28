import PropTypes from 'prop-types';

const Notification = ({ message='Notification' }) => {
    return(
        <span>{message}</span>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification