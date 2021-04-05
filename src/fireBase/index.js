/* eslint-disable */
import firebase from 'firebase'


const config = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: 'innowise-e98e9.firebaseapp.com',
  databaseURL: 'https://innowise-e98e9-default-rtdb.firebaseio.com',
  projectId: 'innowise-e98e9',
  storageBucket: 'innowise-e98e9.appspot.com',
  messagingSenderId: '85270176781',
  appId: '1:85270176781:web:995945ee59dd33c5ca2144',
  measurementId: 'G-SMJP9VS173',
}
firebase.initializeApp(config)


const database = firebase.database()

export {
  firebase,
  database as default,
}

