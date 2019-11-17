import React, { Component } from "react";
import axios from "axios";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  _handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = async event => {
    event.preventDefault();
    console.log("e", this.state);
    //   .post("/auth", {
    //     username: this.state.username,
    //     password: this.state.password
    //   })

    axios
      .post("/auth", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log("res", res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this._handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this._handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Auth;
