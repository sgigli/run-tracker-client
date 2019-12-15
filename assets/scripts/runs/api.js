'use strict'

const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/runs',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = (data) => {
  return $.ajax({
    url: config.apiUrl + '/runs',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const update = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/runs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroy = (id) => {
  return $.ajax({
    url: config.apiUrl + '/runs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const show = (id) => {
  return $.ajax({
    url: config.apiUrl + '/runs/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  index,
  create,
  update,
  destroy,
  show
}
