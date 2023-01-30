import PropTypes from 'prop-types';

const MyComponent2 = props => {
    const {name, children} = props;
    return (
        <div>
            Hello, my name is {name}<br/>
            Child value: {children}

        </div>
    )
}

MyComponent2.defaultProps = {
    name: "DEFAULT_NAME_2"
}

MyComponent2.propTypes = {
    name: PropTypes.string
}

export default MyComponent2;