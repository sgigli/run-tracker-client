'use strict'

const runsApi = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')
const runsUi = require('./ui.js')
// const runsChart = require('./chart')

const onGetRuns = function (event) {
  event.preventDefault()

  runsApi.index()
    .then(runsUi.getRunsSuccess)
    .catch()
}

const onDeleteRun = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('.delete-button').data('id')
  runsApi.destroy(id)
    .then(function (data) {
      onGetRuns(event)
    })
    .catch()
}

const onUpdateRun = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  runsApi.update(data, id)
    .then(function () {
      onGetRuns(event)
    })
    .catch()
}

const onCreateRun = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const run = data.run
  if (!run.date || !run.distance || !run.run_time || !run.place) {
    $('#message').html('Be sure to fill out all fields!')
  } else {
    runsApi.create(data)
      .then(runsUi.createRunSuccess)
      .catch()
  }
}

const onGetChart = (event) => {
  runsApi.index()
    .then(runsUi.drawChart)
}

const onGetRun = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  const date = data.run.date

  runsApi.index()
    .then(function (res) {
      const run = res.runs.find(ele => ele.date === date)
      const id = run.id
      runsApi.show(id)
        .then(runsUi.getRunSuccess)
    })
    .catch()
}

const onShowUpdateFields = (event) => {
  event.preventDefault()
  const id = $(event.target).parents('.edit-button').data('id')
  runsUi.showUpdateFields(id)
}

const onShowSettings = (event) => {
  event.preventDefault()
  $('.after-settings-click').toggle()
}

const addHandlers = () => {
  $('.get-runs').on('submit', onGetRuns)
  $('.create-run').on('submit', onCreateRun)
  $('#output').on('click', '.edit-button', onShowUpdateFields)
  $('#output').on('submit', '.update', onUpdateRun)
  $('#output').on('click', '.delete-button', onDeleteRun)
  $('.chart').on('click', onGetChart)
  $('.get-run').on('submit', onGetRun)
  $('.before-settings-click').on('click', onShowSettings)
  // runsChart.drawChart()
  // $('#message').on('click', '.chart', onDisplayChart)
}

module.exports = {
  addHandlers
}
