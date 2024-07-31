import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/notes' || process.env.BASE_URL

const getAll = () => {
  return axios.get(BASE_URL)
}

const create = newObject => {
  return axios.post(BASE_URL, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${BASE_URL}/${id}`, newObject)
}

export default { getAll, create, update }