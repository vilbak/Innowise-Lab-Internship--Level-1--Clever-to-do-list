
import React from 'react'
import 'react-dates/initialize'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import './index.css'
import authReducer from './store/reducers/authReducer'
import filtersReducer from './store/reducers/filtersReducer'
import noteReducer from './store/reducers/noteReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({
  auth: authReducer,
  note: noteReducer,
  filter: filtersReducer,

}), composeEnhancers(
  applyMiddleware(thunk),
))


ReactDOM.render(<Provider store={store}>

  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'))








