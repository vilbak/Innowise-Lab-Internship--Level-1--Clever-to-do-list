/* eslint-disable */
import moment from 'moment'

export default (note, { sortBy, startDate, endDate }) => {
  const createdAtMoment = moment(note.createdAt)
  return note.filter((note) => {
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true

    return startDateMatch && endDateMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
};
