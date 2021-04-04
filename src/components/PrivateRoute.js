
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {
  Redirect,
  Route,
} from 'react-router-dom'


export const PrivateRoute = ({
                               isAuthenticated,
                               component: Component,
                               ...rest
                             }) => {
  return (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    )} />
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.idToken !== null,
  }
}
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.any,
  component:PropTypes.func

}

export default connect(mapStateToProps)(PrivateRoute)
