import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://innowise-e98e9-default-rtdb.firebaseio.com/',
})

export default instance
