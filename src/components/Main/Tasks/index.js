import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  startAddNote,
  startSetNotes,
} from '../../../store/actions/notes'
import TasksAdd from './TasksAdd'
import TaskList from './TasksList'

const Tasks = (props) => {
  useEffect(() => {
    props.startSetNotes()
  }, [])
  return (
    <>
      <TasksAdd
        onSubmit={(note) => {
          props.startAddNote(note)
        }} />
      <TaskList />
    </>)
}

const mapDispatchToProps = (dispatch) => ({
  startAddNote: (note) => dispatch(startAddNote(note)),
  startSetNotes: () => dispatch(startSetNotes()),
})

Tasks.propTypes = {
  startAddNote: PropTypes.func,
  startSetNotes: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Tasks)

