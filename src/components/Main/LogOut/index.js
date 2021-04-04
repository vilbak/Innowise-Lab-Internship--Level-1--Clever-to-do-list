
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router'
import * as actions from '../../../store/actions/index'
import './style.css'

const LogOut = (props) => {
  /*function for logout */
  const clickHandler = async (event) => {
    try {
      event.preventDefault()
      await props.onLogOut()

    } catch (e) {
      console.error(e)
    }
  }
  let authRedirect = null

  if (!props.auth) {
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

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(actions.logout()),
  }
}

LogOut.propTypes = {
  onLogOut: PropTypes.func,
  auth: PropTypes.bool,

}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)
