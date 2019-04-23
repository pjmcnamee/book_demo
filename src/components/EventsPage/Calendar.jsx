import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

 const MyCalendar = props => (
  <div className='calendar-holder'>
    <BigCalendar
      localizer={localizer}
      events={[
        {
          'title': 'My event',
          'allDay': false,
          'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
          'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
        }
      ]}
      step={60}
      view='week'
      views={['week']}
      min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
      max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
      date={new Date(2018, 0, 1)}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default MyCalendar

