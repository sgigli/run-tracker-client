'use strict'

const showRunsTemplate = require('../templates/run-listing.handlebars')
const showRunTemplate = require('../templates/get-run.handlebars')
const runsChart = require('./chart')

const getRunsSuccess = data => {
  console.log(data)
  const showRunsHtml = showRunsTemplate({runs: data.runs})
  $('#output').html(showRunsHtml)
}

const getRunSuccess = data => {
  console.log(data)
  const showRunHtml = showRunTemplate({run: data.run})
  $('#output').html(showRunHtml)
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
  console.log($('#myChart2'))
  // $('#myChart2').classList.toggle('canvas')
  runsChart.drawChart(distance, dates)
  $('#myChart2').css('background-color', 'white')
  // $('canvas')[0].style.backgroundColor = 'white'
  // document.getElementById('#myChart2').style.backgroundColor = 'white'
}

module.exports = {
  getRunsSuccess,
  getRunSuccess,
  drawChart
}
