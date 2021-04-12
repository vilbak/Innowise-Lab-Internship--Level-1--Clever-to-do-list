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
import Spinner from '../Spinner/index'
import './styles.css'

const Register = () => {

  const dispatch = useDispatch()

  const authenticate = useSelector(state => state.auth.authenticated)
  const loading = useSelector(state => state.auth.loading)


  const { register, handleSubmit } = useForm()


  /* function for auth */
  const clickHandler = async (data) => {
    if (data.confirm === data.password) {
      try {
        dispatch(auth(data.email, data.password))
      } catch (e) {
        console.error(e)
      }
    }
  }

  let authRedirect = null

  if (authenticate) {
    authRedirect = <Redirect to={'/main'} />
  }

  return ((loading ? <Spinner /> :
      <section className={'wrapper'}>
        {authRedirect}
        <div className={'container'}>
          <ToastContainer autoClose={2000} />
          <form onSubmit={handleSubmit(clickHandler)} className={'registerForm'}>
            <span className={'title'}>Register Page</span>
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
            <input
              {...register('confirm')}
              className={'input'}
              type="password"
              placeholder="Confirm Password"
            />
            <button className={'btnR'}>Sign Up</button>
            <Link className={'link'} to="/login">Switch to Login</Link>
          </form>
        </div>
      </section>)
  )
}


export default Register
