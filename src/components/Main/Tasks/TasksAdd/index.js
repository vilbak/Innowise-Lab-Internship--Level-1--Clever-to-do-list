import { format } from 'date-fns'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-dates/lib/css/_datepicker.css'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import './style.css'

const TasksAdd = (props) => {
  const [ chosenDay, setChosenDay ] = useState(props.existingNote ? props.existingNote.createdAt : format(new Date(), 'yyyy-MM-dd'))
  const [ selected, setSelected ] = useState(new Date())
  const [ error, setError ] = useState('')
  const [ isDone, setIsDone ] = useState(false)
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  const onDateChange = (createdAt) => {
    if (chosenDay) {
      setChosenDay(format(createdAt, 'yyyy-MM-dd'))
      setSelected(createdAt)
    }

  }

  const setStatus = (e) => {
    e.preventDefault()
    setIsDone(true)
  }


  const onSubmitHandler = async (data) => {

    if (!data.description) {
      setError('Please provide description')
    } else {
      setError('')

      await props.onSubmit({
        note: data.title,
        description: data.description,
        createdAt: chosenDay,
        done: isDone,
      })
      history.push('/main')

    }

  }
  return (
    <div className={'contentContainer'}>
      <h1 className={'taskHeader'}> {props.existingNote ? 'Edit Notes' : 'Add Notes'}</h1>
      <form className={'form'} onSubmit={handleSubmit(onSubmitHandler)}>
        {error && <p className={'formError'}>{error}</p>}
        <input className={'textInput'}
               {...register('title')}
               type='text'
               placeholder='Title'
               autoFocus
        />
        <textarea
          {...register('description')}
          className={'description'} placeholder='Add a description for your note'
        />
        <DatePicker
          date={chosenDay}
          selected={selected}
          onSelect={onDateChange}
          autoFocus={true}
          placeholderText={'Pick  a date'}
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


TasksAdd.propTypes = {
  note: PropTypes.object,
  existingNote: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default (TasksAdd)
