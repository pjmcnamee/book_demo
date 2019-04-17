import React, { Component } from 'react'
import Calendar from './Calendar'

export class Events extends Component {
  render() {
	return (
		<div className="component-holder">
        <div>
          <Calendar/>
        </div>
      </div>
	)
  }
}

export default Events
