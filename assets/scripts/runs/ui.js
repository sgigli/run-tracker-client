'use strict'

const showRunsTemplate = require('../templates/run-listing.handlebars')
const showRunTemplate = require('../templates/get-run.handlebars')
const showChartTemplate = require('../templates/get-chart.handlebars')
const runsChart = require('./chart')
const eva = require('eva-icons')

const createRunSuccess = () => {
  $('#message').html('Run logged!')
  $('form').trigger('reset')
}

const getRunsSuccess = data => {
  console.log(data)
  const showRunsHtml = showRunsTemplate({runs: data.runs})
  // $('#myChart2').empty()
  $('#message').empty()
  $('#output').html(showRunsHtml)
  eva.replace()
}

const getRunSuccess = data => {
  console.log(data)
  const showRunHtml = showRunTemplate({run: data.run})
  $('#message').empty()
  $('form').trigger('reset')
  $('#output').html(showRunHtml)
  eva.replace()
}

const drawChart = (data) => {
  const array = data.runs
  const dates = []
  const distance = []
  array.forEach(function (ele) {
    dates.push(ele.date)
    distance.push(parseInt(ele.distance))
  })
  const showChartHtml = showChartTemplate()
  $('#output').html(showChartHtml)
  runsChart.drawChart(distance, dates)
  $('#message').empty()
  $('#myChart2').addClass('white-background')
}

const showUpdateFields = (id) => {
  $(`form[data-id=${id}]`).removeClass('update-run')
  $(`form[data-id=${id}]`).addClass('update-run-show')
}

module.exports = {
  getRunsSuccess,
  getRunSuccess,
  drawChart,
  showUpdateFields,
  createRunSuccess
}
