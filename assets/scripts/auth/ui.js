'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('You successfully signed up, now sign in!')
}

const onSignUpFailure = () => {
  onFailure('Please try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  $('#message').text('You successfully signed in!')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('Please try to sign in again')
}

const onSignOutSuccess = () => {
  store.user = {}
  onSuccess('You successfully signed out!')
  $('.before-auth').show()
  $('.after-auth').hide()
}

const onSignOutFailure = () => {
  onFailure('Please try to sign out again.')
}

const onChangePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('Successful password change!')
}

const onChangePasswordFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Please try again')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
