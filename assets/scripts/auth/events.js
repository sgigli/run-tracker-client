'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess) // ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure) // ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess) // ui.onSignUpSuccess)
    .catch(ui.onSignInFailure) // ui.onSignUpFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onShowChangePW = (event) => {
  event.preventDefault()

  $('.hide').show()
  $('.show-change-PW').hide()
}

const onDemo = event => {
  console.log('test')
  api.demoSignIn()
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.show-change-PW').on('click', onShowChangePW)
  $('#demo').on('click', onDemo)
}

module.exports = {
  addHandlers
}
