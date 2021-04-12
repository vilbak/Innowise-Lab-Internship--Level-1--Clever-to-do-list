import React from 'react'
import { useForm } from 'react-hook-form'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import {
  Link,
  Redirect,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { auth } from '../../store/actions/index'
import './style.css'

const Login = () => {
  const isSignUp = true
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const authenticate = useSelector(state => state.auth.authenticated)


  /* function for login*/
  const clickHandler = async (data) => {
    try {
      dispatch(auth(data.email, data.password, isSignUp))
    } catch (e) {
      console.error(e)
    }
  }

  let authRedirect = null

  if (authenticate) {
    authRedirect = <Redirect to={'/main'} />
  }

  return (
    <section className={'wrapper'}>
      <div className={'container'}>
        {authRedirect}
        <ToastContainer autoClose={2000} />
        <form onSubmit={handleSubmit(clickHandler)} className={'registerForm'}>
          <span className={'title'}>Login Page</span>
          <input
            {...register('email')}
            className={'input'}
            type="text"
            placeholder="E-mail"
          />
          <input
            {...register('password')}
            className={'input'}
            type="password"
            placeholder="Password"
          />
          <button className={'btnR'}>Sign in</button>
          <Link className={'link'} to="/register">Switch to Register</Link>
        </form>
      </div>
    </section>

  )
}


export default (Login)
