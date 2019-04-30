import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

export class Events extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    //DO WITH REDUX TO KEEP IT IN STATE LOOK AT BOOKS for ref ..... also make sure u look at the events add and change that shizz too
  }

  handleChange = (target, e) => {
    this.setState({
      [target]: e.target.value
    })
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="component-holder">
        <div>
          <h1>Events</h1>
        </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Events;
