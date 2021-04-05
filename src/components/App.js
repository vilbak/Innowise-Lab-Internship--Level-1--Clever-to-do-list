
import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import '../fireBase/'
import './App.css'
import Login from './Login'
import Main from './Main'
import  TaskEdit  from './Main/Tasks/TaskEdit'
import PrivateRoute from './PrivateRoute'
import Register from './Register'

function App()

{
  return (
    <Router>
      <Switch>
        <Redirect from={'/'} to={'/register'} exact />
        <PrivateRoute path={'/main'} component={Main} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path="/edit/:id" component={TaskEdit} />

        <PrivateRoute path={'/task'} />
      </Switch>
    </Router>
  )
}

export default App
