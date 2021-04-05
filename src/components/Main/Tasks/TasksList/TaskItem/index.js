import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveNote } from '../../../../../store/actions/notes'
import './style.css'

const TaskItem = ({ setStartRemove, note, id, description, createdAt, done }) => (

  <div className={done ? 'taskContainerComplete' : 'taskContainer'}>
    {done ? <div className={'doneContainer'}><FontAwesomeIcon icon={faCheck} size="lg" color={'green'} />
      <p>Your task is done</p>
    </div> : ''}
    <h3>{description}</h3>
    <h3>{note}</h3>
    <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>


    <div className={'buttonContainer'}>
      <button className={'removeButton'} onClick={() => {
        setStartRemove({ id })
      }}>Remove
      </button>
      {done ? '' : <Link className={'editButton'} to={`/edit/${id}`}> Edit</Link>}


    </div>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  setStartRemove: ({ id }) => dispatch(startRemoveNote({ id })),
})
TaskItem.propTypes = {
  setStartRemove: PropTypes.func,
  note: PropTypes.string,
  id: PropTypes.any,
  description: PropTypes.string,
  createdAt: PropTypes.any,


}

export default connect(null, mapDispatchToProps)(TaskItem)
