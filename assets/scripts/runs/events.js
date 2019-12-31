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
  const id = $(event.target).parents('.delete-button').data('id')
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
    .then(runsUi.createRunSuccess)
    .catch(console.error)
}

const onGetChart = (event) => {
  runsApi.index()
    .then(runsUi.drawChart)
  // console.log(data.runs)
}

const onGetRun = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  const date = data.run.date

  runsApi.index()
    .then(function (res) {
      console.log(res.runs)
      const run = res.runs.find(ele => ele.date === date)
      console.log(run)
      const id = run.id
      console.log(id)
      runsApi.show(id)
        .then(runsUi.getRunSuccess)
    })
    .catch(console.error)
}

const onShowUpdateFields = (event) => {
  event.preventDefault()
  const id = $(event.target).parents('.edit-button').data('id')
  console.log(id)
  runsUi.showUpdateFields(id)
}

const onShowSettings = (event) => {
  event.preventDefault()
  $('.after-settings-click').toggle()

  // $('#enclose').addClass('white-background')
  // $('.after-settings-click').addClass('white-background')
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
