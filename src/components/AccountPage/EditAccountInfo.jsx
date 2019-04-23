import React, { Component } from "react";
import { getData } from "../../ducks/userReducer";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

export class EditAccountInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: props.email,
      firstName: props.firstName,
      lastName: props.lastName,
      age: props.age,
      newsLetter: props.newsLetterSignup
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
    await this.props.history.push("/account");
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
    console.log("props", this.props);
    return (
      <div className="component-holder">
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
              checked={this.state.newsLetter}
            />
          </Form.Group>
          <div className="register-buttons">
            <Link to="/account">
              <Button variant="primary" type="submit">
                Cancel
              </Button>
            </Link>
              <Button
                onClick={e => this.editAccountInfo(this.props.id)}
                variant="primary"
                type="submit"
              >
                Update Info
              </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapState = reduxState => reduxState.userReducer;

export default withRouter(connect(
  mapState,
  { getData }
)(EditAccountInfo));
