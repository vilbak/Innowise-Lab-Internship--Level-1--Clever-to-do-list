import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { connect } from 'react-redux'
import './style.css'

const TasksAdd = (props) => {
  console.log('existing', props.existingNote)
  const [ title, setTitle ] = useState(props.existingNote ? props.existingNote.note : '')
  const [ calendarFocused, setCalendarFocused ] = useState(false)
  const [ chosenDay, setChosenDay ] = useState(props.existingNote ? moment(props.existingNote.createdAt) : moment())
  const [ description, setDescription ] = useState(props.existingNote ? props.existingNote.description : '')
  const [ error, setError ] = useState('')


  const onDateChange = (createdAt) => {
    if (chosenDay) {
      setChosenDay(createdAt)
    }

  }
  const onChangeDescription = (e) => {
    const value = e.target.value
    setDescription(value)
  }

  const onChange = (e) => {
    const value = e.target.value
    setTitle(value)
  }
  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!description) {
      setError('Please provide description')

    } else {
      setError('')
      props.onSubmit({
        note: title,
        description: description,
        createdAt: chosenDay.valueOf(),
      })
    }

  }
  return (
    <div className={'contentContainer'}>
      <h1 className={'taskHeader'}> {props.existingNote ? 'Edit Notes' : 'Add Notes'}</h1>
      <form className={'form'} onSubmit={onSubmitHandler}>
        {error && <p className={'formError'}>{error}</p>}
        <input className={'textInput'} type='text'
               placeholder='Title'
               autoFocus
               value={title}
               onChange={onChange} />
        <textarea className={'description'} placeholder='Add a description for your note'
                  value={description}
                  onChange={onChangeDescription} />
        <SingleDatePicker
          date={chosenDay}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
        />
        <div>
          <button className={'addButton'}>{props.existingNote ? 'Edit The Note' : 'Add a  Note'}</button>
        </div>

      </form>
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    note: state.note,
  }
}


TasksAdd.propTypes = {
  note: PropTypes.object,
  existingNote: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default connect(mapStateToProps)(TasksAdd)
