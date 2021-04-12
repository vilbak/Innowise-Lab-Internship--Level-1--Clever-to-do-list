import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveNote } from '../../../../../store/actions/notes'
import './style.css'

const TaskItem = ({ note, id, description, createdAt, done }) => {
  const dispatch = useDispatch()
  return (
    <div className={done ? 'taskContainerComplete' : 'taskContainer'}>
      {done ? <div className={'doneContainer'}><FontAwesomeIcon icon={faCheck} size="lg" color={'green'} />
        <p>Your task is done</p>
      </div> : ''}
      <div className={'textContainer'}>
        <h3>{description}</h3>
        <h3>{note}</h3>
        <span>{(createdAt)}</span>
      </div>
      <div className={'buttonContainer'}>
        <button className={'removeButton'} onClick={() => {
          dispatch(startRemoveNote({ id }))
        }}>Remove
        </button>
        {done ? '' : <Link className={'editButton'} to={`/edit/${id}`}> Edit</Link>}
      </div>
    </div>

  )
}


TaskItem.propTypes = {
  setStartRemove: PropTypes.func,
  note: PropTypes.string,
  id: PropTypes.any,
  description: PropTypes.string,
  createdAt: PropTypes.any,
}

export default (TaskItem)
