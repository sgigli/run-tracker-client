'use strict'

const showRunsTemplate = require('../templates/run-listing.handlebars')
const runsChart = require('./chart')

const getRunsSuccess = data => {
  console.log(data)
  const showRunsHtml = showRunsTemplate({runs: data.runs})
  $('#message').html(showRunsHtml)
}

const drawChart = (data) => {
  console.log(data.runs)
  const array = data.runs
  const dates = []
  const distance = []
  array.forEach(function (ele) {
    dates.push(ele.date)
    distance.push(parseInt(ele.distance))
    console.log(ele.date)
    console.log(parseInt(ele.distance))
  })
  console.log(dates)
  runsChart.drawChart(distance, dates)
}

module.exports = {
  getRunsSuccess,
  drawChart
}
