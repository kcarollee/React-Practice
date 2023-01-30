import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  /*
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }
  */

  // transform class propoerties
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>
          ---------------------------event
          practice-----------------------------------
        </h1>

        <input
          type="text"
          name="username"
          placeholder="USERNAME"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="SAY ANYTHING"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>OKAY</button>
      </div>
    );
  }
}

export default EventPractice;
