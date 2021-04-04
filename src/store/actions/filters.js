import * as actionTypes from './actionTypes'

export const setStartDate = (startDate) => ({
  type: actionTypes.SET_START_DATE,
  startDate,
})

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: actionTypes.SET_END_DATE,
  endDate,
})
