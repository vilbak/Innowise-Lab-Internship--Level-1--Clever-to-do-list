
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { startAddNote } from '../../../store/actions/notes'
import TasksAdd from './TasksAdd'
import TaskList from './TasksList'

const Tasks = (props) => {

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
})

Tasks.propTypes = {
  startAddNote: PropTypes.func,

}

export default connect(null, mapDispatchToProps)(Tasks)

