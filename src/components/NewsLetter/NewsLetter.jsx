import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export class NewsLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  handleInputChange = (type, e) => {
    this.setState({
      [type]: e.target.value
    });
  };

  newsLetterSignUp = async () => {
    const { email } = this.state;
    axios
      .post("/api/newsletter", { email })
      .then(res => alert("You have subscribed!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="component-holder">
        <h1 className="page-title">Newsletter</h1>
        <p>
          If you would like to sign up to recieve a newsletter without creating
          an account just enter your email and hit submit.
        </p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("email", e)}
              type="email"
              placeholder="Enter email"
              value={this.state.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            onClick={() => this.newsLetterSignUp()}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
        ;
      </div>
    );
  }
}

export default NewsLetter;