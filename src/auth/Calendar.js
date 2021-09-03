
import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import './calendar.css'

function MonthlyCalendar() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div className="calendarBox">
      <Calendar value={dateState} onChange={changeDate} />
      <p className="calendarBody">
        Today's date is <b>{moment(dateState).format('MMMM Do YYYY')}.</b>{' '}
      </p>
      <p>Let's make it happen!</p>
    </div>
  )
}


export default MonthlyCalendar