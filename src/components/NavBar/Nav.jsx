import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LoginNav from './LoginNav'

export class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="nav-button-holder">
        <Link to="/">
          <Button
            className="nav-button"
            // onClick={() => this.props.handleClick("homeClicked")}
            variant="secondary"
            size="lg"
            // disabled={this.props.state.homeClicked}
          >
            Home
          </Button>
        </Link>

        <Link to="/books">
          <Button
            className="nav-button"
            // onClick={() => this.props.handleClick("booksClicked")}
            variant="secondary"
            size="lg"
            // disabled={this.props.state.booksClicked}
          >
            Books
          </Button>
        </Link>

      {/* zombie code incase i need to use endpoint - dont know if client wants it or to have it wrapped into events/articles */}
        
        {/* <Link to="/updates">
          <Button
            className="nav-button"
            // onClick={() => this.props.handleClick("updatesClicked")}
            variant="secondary"
            size="lg"
            // disabled={this.props.state.updatesClicked}
          >
            Updates
          </Button>
        </Link> */}

        <Link to="/newsletter">
          <Button
            className="nav-button"
            // onClick={() => this.props.handleClick("newsletterClicked")}
            variant="secondary"
            size="lg"
            // disabled={this.props.state.newsletterClicked}
          >
            Newsletter
          </Button>
        </Link>

        <Link to="/events">
          <Button
            className="nav-button"
            // onClick={() => this.props.handleClick("eventsClicked")}
            variant="secondary"
            size="lg"
            // disabled={this.props.state.eventsClicked}
          >
            Events
          </Button>
        </Link>

        <Link to="/about">
          <Button
            className="nav-button"
            // onClick={() => this.props.handleClick("aboutClicked")}
            variant="secondary"
            size="lg"
            // disabled={this.props.state.aboutClicked}
          >
            About
          </Button>
        </Link>
        <LoginNav />
      </div>
    );
  }
}

export default Nav