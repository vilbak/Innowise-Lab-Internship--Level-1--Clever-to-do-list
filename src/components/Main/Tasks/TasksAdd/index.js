import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import './style.css'

const TasksAdd = (props) => {

  const [ title, setTitle ] = useState(props.existingNote ? props.existingNote.note : '')
  const [ calendarFocused, setCalendarFocused ] = useState(false)
  const [ chosenDay, setChosenDay ] = useState(props.existingNote ? moment(props.existingNote.createdAt) : moment())
  const [ description, setDescription ] = useState(props.existingNote ? props.existingNote.description : '')
  const [ error, setError ] = useState('')
  const [ isDone, setIsDone ] = useState(false)
  const history = useHistory()

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
  const setStatus = (e) => {
    e.preventDefault()
    setIsDone(true)
  }
  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused)
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!description) {
      setError('Please provide description')

    } else {
      setError('')

      await props.onSubmit({
        note: title,
        description: description,
        createdAt: chosenDay.valueOf(),
        done: isDone,
      })
      if (isDone) {
        history.push('/main')
      }

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
        {props.existingNote ? <div>
          <button className={'doneButton'} onClick={setStatus}>Done</button>
        </div> : ''}
        <div>
          <button className={'addButton'}>{props.existingNote ? 'Apply changes' : 'Add a  Note'}</button>
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
