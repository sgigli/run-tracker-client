'use strict'

const runsApi = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')
const runsUi = require('./ui.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetRuns = function (event) {
  event.preventDefault()

  runsApi.index()
    .then(runsUi.getRunsSuccess)
    .catch(console.error)
}

const onDeleteRun = function (event) {
  event.preventDefault()

  const id = $(event.target).data('id')
  console.log(id)
  runsApi.destroy(id)
    .then(function (data) {
      onGetRuns(event)
    })
    .catch(console.error)
}

const onUpdateRun = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  runsApi.update(data, event.target)
    .then(function (data) {
      onGetRuns(event)
    })
    .catch(console.error)
}

const onCreateRun = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  runsApi.create(data)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = () => {
  $('.get-runs').on('submit', onGetRuns)
  $('.create-run').on('submit', onCreateRun)
  $('#message').on('submit', '.update-run', onUpdateRun)
  $('#message').on('click', '.btn-danger', onDeleteRun)
  // onDeleteRun()
  // onCreateRun()
  // onUpdateRun()
}

module.exports = {
  addHandlers
}
