import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {
  startEditNote,
} from '../../../../store/actions/notes'
import TasksAdd from '../TasksAdd'

const TaskEdit = (props) => {
  return (
    <div>
      <TasksAdd
        existingNote={props.note}
        onSubmit={(note) => {
       props.dispatch(startEditNote(props.note.id,note))
        }} />
    </div>
  )
}




const mapStateToProps = (state, props) => {
  return {
    note: state.note.find((note) => {
      return note.id === props.match.params.id
    }),
  }
}

TaskEdit.propTypes = {
  note: PropTypes.array,
  dispatch:PropTypes.func
}


export default connect(mapStateToProps)(TaskEdit)


