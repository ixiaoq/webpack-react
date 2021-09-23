const Mock = require('mockjs')

const Random = Mock.Random

module.exports = function () {
  const data = {}
  data.user = {
    name: Random.cname(),
    intro: Random.cparagraph()
  }

  return data
}
