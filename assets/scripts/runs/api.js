'use strict'

const config = require('../config')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/runs',
    method: 'GET'
  })
}

module.exports = {
  index
}
