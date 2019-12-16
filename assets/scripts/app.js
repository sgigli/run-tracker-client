'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const runsEvents = require('./runs/events')
const runsChart = require('./auth/chart')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  runsEvents.addHandlers()
  $('#myChart2').toggleClass('#myChart2')
  // runsChart.drawChart([2, 4, 6, 8, 10, 12])
})
