import axios from 'axios'
import {getShowsByCityCode, moviemainList} from '../mock/'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios, { delayResponse: 1000 })

mock.onGet('/api/queryAdvertise').reply((config) => {
  let params = config.params
  console.log(params)
  let data = {
    code: getShowsByCityCode.code,
    data: []
  }
  data.data = getShowsByCityCode.data.splice(params.page*params.pageSize, params.pageSize)
  return [200, data]
})

mock.onGet('/api/moviemainList').reply((config) => {
  let params = config.params
  let data = {
    code: moviemainList.code,
    data: []
  }
  data.data = moviemainList.data.slice(params.page*params.pageSize,params.page*params.pageSize+params.pageSize)
  return [200, data]
})

mock.onGet('/users').reply(200, {
  users: [
    {
      id: 1,
      name: 'John Smith'
    }
  ]
})
