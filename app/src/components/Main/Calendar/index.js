import React  from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/filters'
import './style.css'

const Calendar = (props) => {
  const [ calendarFocused, setCalendarFocused ] = useState(null)

  const onDatesChange = ({ startDate, endDate }) => {
    props.onStartDate(startDate)
    props.onEndDate(endDate)
  }
  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused)

  }

  return (
    <div className={'maxWidth'}>
      <DateRangePicker
        startDate={props.filter.startDate}
        endDate={props.filter.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onStartDate: (startDate) => dispatch(actions.setStartDate(startDate)),
    onEndDate: (endDate) => dispatch(actions.setEndDate(endDate)),
  }
}

Calendar.propTypes = {
  filter: PropTypes.object,
  onStartDate:PropTypes.func,
  onEndDate:PropTypes.func
}

export default connect(mapStateToProps,mapDispatchToProps)(Calendar)
