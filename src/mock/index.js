import Mock from 'mockjs'
import aboutAPI from './about'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/about/, 'get', aboutAPI.aboutList)

export default Mock