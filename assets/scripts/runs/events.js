'use strict'

const runsApi = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')
const runsUi = require('./ui.js')
// const runsChart = require('./chart')

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
  const id = $(event.target).data('id')
  console.log(data)
  runsApi.update(data, id)
    .then(function () {
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

const onGetChart = (event) => {
  runsApi.index()
    .then(runsUi.drawChart)
  // console.log(data.runs)
}

// const onDisplayChart = () => {
//   const data = onGetRuns()
//
// }

const addHandlers = () => {
  $('.get-runs').on('submit', onGetRuns)
  $('.create-run').on('submit', onCreateRun)
  $('#message').on('submit', '.update-run', onUpdateRun)
  $('#message').on('click', '.btn-danger', onDeleteRun)
  $('.chart').on('click', onGetChart)
  // runsChart.drawChart()
  // $('#message').on('click', '.chart', onDisplayChart)
}

module.exports = {
  addHandlers
}
