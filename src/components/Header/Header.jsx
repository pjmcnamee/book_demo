import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import LoginNav from "../NavBar/LoginNav";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClicked: false,
      booksClicked: false,
      aboutClicked: false,
      accountClicked: false,
      eventsClicked: false,
      updatesClicked: false,
      newsletterClicked: false,
      loginClicked: false
    };
  }

  handleClick = clicked => {
    this.setState({
      homeClicked: false,
      booksClicked: false,
      aboutClicked: false,
      accountClicked: false,
      eventsClicked: false,
      loginClicked: false,
      updatesClicked: false,
      newsletterClicked: false,
      [clicked]: true
    });
  };

  resetClick = () => {
    this.setState({
      homeClicked: false,
      booksClicked: false,
      aboutClicked: false,
      accountClicked: false,
      eventsClicked: false,
      updatesClicked: false,
      newsletterClicked: false,
      loginClicked: false
    });
  };

  render() {
    return (
      <div className="header-container">
        <LoginNav
          resetClick={this.resetClick}
          state={this.state}
          handleClick={this.handleClick}
        />
        <div className="titles-holder">
          <h1>Sweet Title</h1>
          <h2>some cool quote</h2>
        </div>
        <Nav state={this.state} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Header;
