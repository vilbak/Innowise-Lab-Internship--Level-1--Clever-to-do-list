
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import filter from '../../../../selectors/'
import TaskItem from './TaskItem'
import './style.css'

export const TaskList = (props) => {
  return (
    <div className={'contentContainer'}>
      <div className={'listHeader'}>
        Notes
      </div>
      {
        props.note.length === 0 ? (
          <p>No notes</p>
        ) : (
          props.note.map((note) => {
            return <TaskItem key={note.id} {...note} />
          })
        )
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    note: filter(state.note, state.filter),
  }
}
TaskList.propTypes = {
  note: PropTypes.array,

}


export default connect(mapStateToProps)(TaskList)
