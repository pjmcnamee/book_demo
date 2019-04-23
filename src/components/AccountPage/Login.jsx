import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from 'axios';
import { getData } from "../../ducks/userReducer";
import { connect } from "react-redux";

export class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}

	handleInputChange = (type, e) => {
		this.setState({
			[type]: e.target.value
		})
	}

	cancelLogin = () => {
		this.setState({
			email: '',
			password: ''
		})
		this.props.history.push('/')
	}

	handleLogin = async () => {
		const { email , password} = this.state
		const res = await Axios.post('/auth/login', {email, password})

		this.props.getData()

		if(res.data.loggedIn) this.props.history.push('/account')
		else alert('Login Failed')
	}

  render() {
	return (
	  <div className='component-holder'>
	  <h1 className='page-title'>Login</h1>
		<Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className='form-label'>Email address</Form.Label>
            <Form.Control required onChange={(e) => this.handleInputChange('email', e)} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control required onChange={(e) => this.handleInputChange('password', e)} type="password" placeholder="Password" />
          </Form.Group>

		  <div className='register-buttons'>
		  <Link to='/'>
          <Button onClick={() => this.cancelLogin()} variant="primary" type="submit">
            Cancel
          </Button>
		  </Link>
          <Button onClick={() => this.handleLogin()} variant="primary" type="submit">
            Login
          </Button>
		  </div>
        </Form>

				<Link to='/register'>Don't have an account? Click here to register!</Link>

	  </div>
	)
  }
}

export default withRouter(connect(null, {getData})(Login))
