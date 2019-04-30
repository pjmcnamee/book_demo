import React, { Component } from 'react'
import Nav from '../NavBar/Nav';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getData } from "../../ducks/userReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

export class AddEvent extends Component {
	constructor(props){
		super(props)
		this.state = {
			startTime: '',
			endTime: '',
			startDate: '',
			endDate: '',
			eventDescription: ''
		}
	  }

	  componentDidMount() {
		this.props.getData();
	  }
	
	  handleInputChange = (target, e) => {
		this.setState({
		  [target]: e.target.value
		})
	  }

	  addEvent = () => {
		  const { startTime, endTime, startDate, endDate, eventDescription} = this.state
		axios.post('/api/events', { startTime, endTime, startDate, endDate, eventDescription }).then(res => res.data).catch(err => console.log(err))

		this.props.history.push("/events");
	  }

  render() {
	return (
	  <div>
        <Nav />
        <div className="component-holder">
        <div>
          <h1>Add Events also change form to use bootstraps date function</h1>
        </div>
		{this.props.admin ? <div> <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("startTime", e)}
              type="text"
              placeholder="10:00am"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("endTime", e)}
              type="text"
              placeholder="1:00pm"
            />
          </Form.Group>
		  <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("startDate", e)}
              type="text"
              placeholder="4/18/19"
            />
          </Form.Group>
		  <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("endDate", e)}
              type="text"
              placeholder="4/19/19"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Event Description</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("eventDescription", e)}
              as="textarea"
              rows="3"
            />
          </Form.Group>
        </Form>
        <div>
          <Link to="/account">
            <Button variant="primary" type="submit">
              Cancel
            </Button>
          </Link>
          <Button
            onClick={e => this.addEvent()}
            variant="primary"
            type="submit"
          >
            Add Event
          </Button>
        </div></div> : <div> <h2 className='admin-only'>Admins only on this page</h2> <Link to='/'>Back to Home Page</Link></div>}
        </div>
      </div>
	)
  }
}

const mapState = reduxState => reduxState.userReducer;

export default withRouter(connect(mapState, { getData })(AddEvent))
