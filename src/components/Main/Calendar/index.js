import {
  format,
  getDate,
  getDaysInMonth,
} from 'date-fns'
import PropTypes from 'prop-types'
import React from 'react'
import DatePicker from 'react-horizontal-datepicker'
import { useDispatch } from 'react-redux'
import { setDate } from '../../../store/actions/filters'
import './style.css'

const Calendar = (props) => {
  const allDays = getDaysInMonth(new Date())

  const result = getDate(new Date())

  const differenceDays = allDays - result
  const dispatch = useDispatch()
  const selectedDay = (date) => {

    dispatch(setDate(format(date, 'yyyy-MM-dd')))
  }
  return (
    <div className={'calendarContainer'}>
      <DatePicker
        getSelectedDay={selectedDay}
        endDate={differenceDays}
        labelFormat={'MMMM'}
        color={'#750b04'}
      />
    </div>
  )
}


Calendar.propTypes = {
  filter: PropTypes.object,
  onStartDate: PropTypes.func,
  onEndDate: PropTypes.func,
  onDate: PropTypes.func,
}

export default Calendar
