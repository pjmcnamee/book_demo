import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getData, killUser } from "../ducks/userReducer";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from 'axios'
import { withRouter } from 'react-router-dom'

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      homeClicked: false,
      booksClicked: false,
      aboutClicked: false,
      accountClicked: false,
      loginClicked: false
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  handleClick = clicked => {
    this.setState({
      homeClicked: false,
      booksClicked: false,
      aboutClicked: false,
      accountClicked: false,
      loginClicked: false,
      [clicked]: true
    });
  };

  handleLogout = () => {
    console.log(this.props)
    console.log('hit logout function')
    this.props.killUser()
  };

  sendToAccountInfo = () => {
    this.props.history.push('/account')
  }

  render() {
    console.log(this.props)
    const { id } = this.props;

    return (
      <div className="nav-button-holder">
        <Link to="/">
          <Button
            className="nav-button"
            onClick={() => this.handleClick("homeClicked")}
            variant="secondary"
            size="lg"
            disabled={this.state.homeClicked}
          >
            Home
          </Button>
        </Link>

        <Link to="/books">
          <Button
            className="nav-button"
            onClick={() => this.handleClick("booksClicked")}
            variant="secondary"
            size="lg"
            disabled={this.state.booksClicked}
          >
            Books
          </Button>
        </Link>

        <Link to="/about">
          <Button
            className="nav-button"
            onClick={() => this.handleClick("aboutClicked")}
            variant="secondary"
            size="lg"
            disabled={this.state.aboutClicked}
          >
            About
          </Button>
        </Link>

        {id ? (
          <DropdownButton
            className="nav-button"
            alignRight
            title="Account"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item onClick={() => this.sendToAccountInfo()} eventKey="1">Account Info</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => this.handleLogout()} eventKey="4">Logout</Dropdown.Item>
          </DropdownButton>
        ) : (
          <Link to="/login">
            <Button
              className="nav-button"
              onClick={() => this.handleClick("loginClicked")}
              variant="secondary"
              size="lg"
              disabled={this.state.loginClicked}
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    );
  }
}

const mapState = reduxState => reduxState;

export default withRouter(connect(
  mapState,
  { getData, killUser }
)(Nav));
