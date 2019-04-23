import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getData, killUser } from "../../ducks/userReducer";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { withRouter } from "react-router-dom";

class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  handleLogout = async () => {
    await this.props.killUser();
    await this.props.history.push("/");
    this.props.handleClick("homeClicked");
  };

  sendToAccountInfo = async () => {
    await this.props.history.push("/account");
    this.props.resetClick();
  };

  render() {
    const { id } = this.props;
    return (
      <div className="login-button-container">
        {id ? (
          <DropdownButton
            className="bob"
            alignRight
            title="Account"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item
              onClick={() => this.sendToAccountInfo()}
              eventKey="1"
            >
              Account Info
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => this.handleLogout()} eventKey="4">
              Logout
            </Dropdown.Item>
          </DropdownButton>
        ) : (
          <Link to="/login">
            <Button
              className="nav-button"
              onClick={() => this.props.handleClick("loginClicked")}
              variant="secondary"
              size="lg"
              disabled={this.props.state.loginClicked}
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    );
  }
}

const mapState = reduxState => reduxState.userReducer;

export default withRouter(
  connect(
    mapState,
    { getData, killUser }
  )(LoginNav)
);
