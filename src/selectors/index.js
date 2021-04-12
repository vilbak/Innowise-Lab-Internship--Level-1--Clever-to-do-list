/* eslint-disable */

export default (note, { date }) => {
  return note.filter((note) => {
    return date ? date === note.createdAt : true
  })

};
