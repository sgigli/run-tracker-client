'use strict'

const runsApi = require('./api.js')
// const runsUi = require('./ui.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetRuns = function (event) {
  event.preventDefault()

  runsApi.index()
    .then(console.log('success'))
    .catch(console.error)
}

// const onDeleteRun = function(event) {
//   event.preventDefault()
//
//   let data = getFormFields(event.target);
//   booksApi.destroy(data.book.id)
//     .then(booksUi.onDeleteSuccess)
//     .catch(booksUi.onError)
// };
//
// const onUpdateRun = function(event) {
//   event.preventDefault()
//
//   let data = getFormFields(event.target);
//   booksApi.update(data)
//     .then(booksUi.onUpdateSuccess)
//     .catch(booksUi.onError);
// };
//
// const onCreateRun = function(event) {
//   event.preventDefault()
//
//   let data = getFormFields(event.target);
//   booksApi.create(data)
//     .then(booksUi.onCreateSuccess)
//     .catch(booksUi.onError)
// }

const addHandlers = () => {
  $('.get-runs').on('submit', onGetRuns)
  // onDeleteRun()
  // onCreateRun()
  // onUpdateRun()
}

module.exports = {
  addHandlers
}
