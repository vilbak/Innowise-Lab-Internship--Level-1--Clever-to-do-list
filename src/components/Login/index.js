import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Link,
  Redirect,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as actions from '../../store/actions/index'
import './style.css'

const Login = (props) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const isSignUp = true

  /* function for login*/
  const clickHandler = async (event) => {
    try {
      event.preventDefault()
      await props.onAuth(email, password, isSignUp)
    } catch (e) {
      console.error(e)
    }
  }

  let authRedirect = null

  if (props.auth) {
    authRedirect = <Redirect to={'/main'} />
  }

  return (
    <section className={'wrapper'}>
      <div className={'container'}>
        {authRedirect}
        <ToastContainer autoClose={2000} />
        <div className={'registerForm'}>
          <span className={'title'}>Login Page</span>
          <input
            className={'input'}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="E-mail"
          />
          <input
            className={'input'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
          <button onClick={clickHandler} className={'btnR'}>Sign in</button>
          <Link className={'link'} to="/register">Switch to Register</Link>
        </div>
      </div>
    </section>

  )
}
const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
    loading: state.auth.loading,
    error: state.auth.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
  }
}
Login.propTypes = {
  onAuth: PropTypes.func,
  auth: PropTypes.bool,
  loading: PropTypes.bool,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
