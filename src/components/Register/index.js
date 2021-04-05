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
import Spinner from '../Spinner/index'
import './styles.css'

const Register = (props) => {


  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  /* function for auth */
  const clickHandler = async (event) => {
    if (confirmPassword === password) {
      try {
        event.preventDefault()
        await props.onAuth(email, password)
      } catch (e) {
        console.error(e)
      }
    }
  }

  let authRedirect = null

  if (props.auth) {
    authRedirect = <Redirect to={'/main'} />
  }

  return ((props.loading ? <Spinner /> :
      <section className={'wrapper'}>
        {authRedirect}
        <div className={'container'}>
          <ToastContainer autoClose={2000} />
          <div className={'registerForm'}>
            <span className={'title'}>Register Page</span>
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
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={'input'}
              type="password"
              placeholder="Confirm Password"
            />
            <button onClick={clickHandler} className={'btnR'}>Sign Up</button>
            <Link className={'link'} to="/login">Switch to Login</Link>
          </div>
        </div>
      </section>)
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
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  }
}
Register.propTypes = {
  onAuth: PropTypes.func,
  auth: PropTypes.bool,
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
