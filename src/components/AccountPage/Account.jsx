import React, { Component } from "react";
import { getData } from "../../ducks/userReducer";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Nav from "../NavBar/Nav";

export class Account extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <Nav />
      <div className="component-holder">
        <h1 className="page-title">Account</h1>
        <div className="user-card">
         {this.props.id ? <div><p>
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
          <Link to="/editinfo">
            <Button variant="secondary" size="lg" active>
              Edit Info
            </Button>
          </Link>


          {this.props.admin ? (
            <div>
              <h2>Admin stuff // need to add in google Ano to keep track of stats</h2>
              {" "}
              <h1 className="admin-only">Admin stuffz</h1>{" "}
              <p>some cool stuff to set up later</p>{" "}
              <Link to='/addArtical'>
            <Button variant="secondary" size="lg" active>
              Add Artical
            </Button>
          </Link>
          <Link to='/addBook'>
            <Button variant="secondary" size="lg" active>
              Add Book
            </Button>
          </Link>
          <Link to='/addEvent'>
            <Button variant="secondary" size="lg" active>
              Add Event
            </Button>
          </Link>
            </div>
          ) : null} </div> : <div><Link to='/login'>Please login</Link></div>}
        </div>
      </div>
      </div>
    );
  }
}

const mapState = reduxState => reduxState.userReducer;

export default connect(
  mapState,
  { getData }
)(Account);
