import PropTypes from 'prop-types'
import React, {
  useEffect,
  useState,
} from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { startSetNotes } from '../../../store/actions/notes'
import './style.css'
import TaskList from './TasksList'

const Tasks = () => {
  const [ clicked, setClicked ] = useState(false)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(startSetNotes())
  }, [])
  const note = useSelector(state => state.note)

  let addRedirect = null

  const clickHandler = () => {
    setClicked(true)

  }
  if (clicked) {
    addRedirect = <Redirect to={'/add'} />
  }
  return (
    <>
      <div className={'contentContainer'}>
        <div className={'styledLink'}>
          {addRedirect}
          <button className={'addButton'} onClick={clickHandler}>Add</button>
        </div>
        <div className={'createdTaskContainer'}>
          <div className={'noteContainer'}>{note.length === 0 ? `You dont have any notes yet` : 'Your notes'}
            {note.map((note) => {
              return <div>{note.description} at {note.createdAt}
              </div>
            })}
          </div>
        </div>
      </div>
      <TaskList />
    </>)
}


Tasks.propTypes = {
  startAddNote: PropTypes.func,
  startSetNotes: PropTypes.func,
}

export default Tasks
