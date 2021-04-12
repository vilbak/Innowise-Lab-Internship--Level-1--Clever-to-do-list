import PropTypes from 'prop-types'
import React from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { Redirect } from 'react-router'
import { logout } from '../../../store/actions/index'
import './style.css'

const LogOut = () => {
  const dispatch = useDispatch()
  const authenticate = useSelector(state => state.auth.authenticated)
  /*function for logout */
  const clickHandler = async (event) => {
    try {
      event.preventDefault()
      await dispatch(logout())

    } catch (e) {
      console.error(e)
    }
  }
  let authRedirect = null

  if (!authenticate) {
    authRedirect = <Redirect to={'/login'} />
  }
  return (
    <section className={'maxWidth'}>
      {authRedirect}
      <div className={'header'}>
        <h1 className={'titleHeader'}> Task Manager</h1>
        <button onClick={clickHandler} className={'btn'}>Log out</button>
      </div>
    </section>
  )
}


LogOut.propTypes = {
  onLogOut: PropTypes.func,
  auth: PropTypes.bool,

}

export default LogOut
