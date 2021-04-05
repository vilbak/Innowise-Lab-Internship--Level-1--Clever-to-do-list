import database from '../../fireBase'

export const addNote = task => (
  {
    type: 'ADD_NOTE',
    task,
  }
)

export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id,
})

export const startRemoveNote = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.userId

    database.ref(`users/${uid}/notes/${id}`).remove().then(() => {

      dispatch(removeNote(({ id })))
    })


  }
}


export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates,
})

export const startEditNote = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.userId
    return database.ref(`users/${uid}/notes/${id}`).update(updates).then(() => {
      dispatch(editNote(id, updates))
    })
  }
}

export const startAddNote = (noteData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.userId
    const {
      description = '',
      note = '',
      createdAt = '',
      done = '',
    } = noteData
    const notes = { description, note, createdAt, done }
    database.ref(`users/${uid}/notes`).push(notes).then((ref) => {

      dispatch(addNote(({
        id: ref.key,
        ...notes,
      })))
    })

  }
}

export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes,
})

export const startSetNotes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.userId
    database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
      const notes = []
      snapshot.forEach((childSnap) => {
        notes.push({
          id: childSnap.key,
          ...childSnap.val(),
        })
      })

      dispatch(setNotes(notes))
    })
  }
}
