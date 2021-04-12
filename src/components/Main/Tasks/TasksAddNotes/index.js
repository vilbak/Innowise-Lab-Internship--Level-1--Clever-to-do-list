import React from 'react'
import { useDispatch } from 'react-redux'
import { startAddNote } from '../../../../store/actions/notes'
import TasksAdd from '../TasksAdd'

const TaskAddNotes = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <TasksAdd
        onSubmit={(note) => {
          dispatch(startAddNote(note))
        }} />
    </div>
  )
}


export default TaskAddNotes


