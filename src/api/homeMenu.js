import fetch from 'utils/fetch'

export function HomeList (param) {
  console.log(param)
  return fetch({
    url: `/Menu?type=${param}`,
    method: 'get'
  })
}