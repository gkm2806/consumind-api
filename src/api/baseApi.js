import axios from "axios"

const BaseApi = {
  get(path) {
    return axios.get(path)
  },
  post(path, params) {
    return axios.post(path, params)
  }
}

export default BaseApi