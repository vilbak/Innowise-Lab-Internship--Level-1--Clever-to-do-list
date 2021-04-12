

import React from 'react'
import Calendar from './Calendar'
import LogOut from './LogOut'
import './style.css'
import Tasks from './Tasks'

const Main = () => {
  return (
    <>
      <LogOut />
      <Calendar />
      <Tasks />
    </>

  )
}


export default Main
