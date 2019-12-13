'use strict'

const showRunsTemplate = require('../templates/run-listing.handlebars')

const getRunsSuccess = data => {
  // console.log(data)
  const showRunsHtml = showRunsTemplate({runs: data.runs})
  $('#message').html(showRunsHtml)
}

module.exports = {
  getRunsSuccess
}
