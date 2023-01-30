import { Component } from "react";
import PropTypes from "prop-types";

class MyComponentClass extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        HELLO MY NAME IS {name}
        <br />
        children value: {children}
        <br />
        favorite number: {favoriteNumber}
        <br />
      </div>
    );
  }
}

MyComponentClass.defaultProps = {
  name: "DEFUAULT_NAME_CLASS",
};

MyComponentClass.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponentClass;
