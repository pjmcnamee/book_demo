import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      age: 0,
      admin: false,
      newsLetter: false
    };
  }

  handleInputChange = (type, e) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleSubscribeChange = () => {
	  this.setState({
		  newsLetter: !this.state.newsLetter
	  })
}

cancelRegistration = () => {
	this.setState({
	  email: "",
      password: "",
      firstName: "",
      lastName: "",
      age: 0,
      admin: false,
      newsLetter: false
	})
}

register = async (e) => {
  e.preventDefault()
	const { email, password, firstName, lastName, age, admin, newsLetter} = this.state
	const res = await Axios.post('auth/register', {email, password, firstName, lastName, age, admin, newsLetter})
	if(res.data.loggedIn) this.props.history.push('/account')
	else alert('Registration Failed')
}

  render() {
    return (
      <div className="component-holder">
        <h1 className="page-title">Register</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className='form-label'>Email address</Form.Label>
            <Form.Control required onChange={(e) => this.handleInputChange('email', e)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control required onChange={(e) => this.handleInputChange('password', e)} type="password" placeholder="Password" />
          </Form.Group>

		  <Form.Group controlId="formBasicFirstName">
            <Form.Label className='form-label'>First Name</Form.Label>
            <Form.Control onChange={(e) => this.handleInputChange('firstName', e)} type="text" placeholder="First Name" />
          </Form.Group>

		  <Form.Group controlId="formBasicLastName">
            <Form.Label className='form-label'>Last Name</Form.Label>
            <Form.Control required onChange={(e) => this.handleInputChange('lastName', e)} type="text" placeholder="Last Name" />
          </Form.Group>

		  <Form.Group controlId="formBasicAge">
            <Form.Label className='form-label'>Age</Form.Label>
            <Form.Control required onChange={(e) => this.handleInputChange('age', e)} type="number" placeholder="Age" />
          </Form.Group>

          <Form.Group controlId="formBasicChecbox">
            <Form.Check onChange={(e) => this.handleSubscribeChange()} type="checkbox" label="Subscribe to Mail" className='form-label'/>
          </Form.Group>
		  <div className='register-buttons'>
		  <Link to='/login'>
          <Button onClick={() => this.cancelRegistration()} variant="primary" type="submit">
            Cancel
          </Button>
		  </Link>
          <Button onClick={(e) => this.register(e)} variant="primary" type="submit">
            Register
          </Button>
		  </div>
        </Form>
        ;
      </div>
    );
  }
}

export default Login;
