import PropTypes from 'prop-types';

const Button = ({ color, showFormButtonText, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
        >
            {showFormButtonText}
        </button>
    )
}

Button.defaultProps = {
    color: 'green',
    text: 'Add Task',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
