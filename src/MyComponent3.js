import PropTypes from "prop-types";

const MyComponent3 = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Hello, this is the {name} of the 3rd component <br />
      The value of the children is {children} <br />
      My favorite number is {favoriteNumber}
    </div>
  );
};

MyComponent3.defaultProps = {
  name: "DEFAULT_NAME_3",
};

MyComponent3.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent3;
