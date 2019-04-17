import React, { Component } from "react";
import { getData } from "../ducks/userReducer";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editInfo: false,
      email: "",
      firstName: "",
      lastName: "",
      age: 0,
      newsLetter: false
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  editAccountInfo = async id => {
    const { email, firstName, lastName, age, newsLetter } = this.state;

    await axios.put(`/api/update/${id}`, {
      email,
      firstName,
      lastName,
      age,
      newsLetter
    });

    this.props.getData();

    this.setState({
      editInfo: false
    });
  };

  handleInputChange = (type, e) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleSubscribeChange = () => {
    this.setState({
      newsLetter: !this.state.newsLetter
    });
  };

  render() {
    return (
      <div className="component-holder">
        <h1 className="page-title">Account</h1>
        {this.state.editInfo ? (
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <Form.Control
                required
                onChange={e => this.handleInputChange("email", e)}
                type="email"
                value={this.state.email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                onChange={e => this.handleInputChange("firstName", e)}
                type="text"
                value={this.state.firstName}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control
                required
                onChange={e => this.handleInputChange("lastName", e)}
                type="text"
                value={this.state.lastName}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAge">
              <Form.Label className="form-label">Age</Form.Label>
              <Form.Control
                required
                onChange={e => this.handleInputChange("age", e)}
                type="number"
                value={this.state.age}
              />
            </Form.Group>

            <Form.Group controlId="formBasicChecbox">
              <Form.Check
                onChange={e => this.handleSubscribeChange()}
                type="checkbox"
                label="Subscribe to Mail"
                className="form-label"
              />
            </Form.Group>
            <div className="register-buttons">
              <Button
                onClick={() =>
                  this.setState({
                    editInfo: false
                  })
                }
                variant="primary"
                type="submit"
              >
                Cancel
              </Button>
              <Button
                onClick={e => this.editAccountInfo(this.props.id)}
                variant="primary"
                type="submit"
              >
                Update Info
              </Button>
            </div>
          </Form>
        ) : (
          <div className="user-card">
            <p>
              <span>Email: </span>
              {this.props.email}
            </p>
            <p>
              <span>Name: </span>
              {`${this.props.firstName} ${this.props.lastName}`}
            </p>
            <p>
              <span>Age: </span>
              {this.props.age}
            </p>
            <p>
              <span>Newsletter Subscription: </span>
              {this.props.newsLetterSignup ? "Subscribed" : "Unsubscribed"}
            </p>
            <Button
              onClick={() =>
                this.setState({
                  editInfo: true,
                  email: this.props.email,
                  firstName: this.props.firstName,
                  lastName: this.props.lastName,
                  age: this.props.age,
                  newsLetter: this.props.newsLetterSignup
                })
              }
              variant="primary"
              type="submit"
            >
              Edit Info
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapState = reduxState => reduxState.userReducer;

export default connect(
  mapState,
  { getData }
)(Account);
