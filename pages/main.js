var Page = require('./page')

var MainPage = Object.create(Page, {
  signUpBtn: Page.makeElementFrom('.wow.slideInLeft.btn.btn-lg.btn-primary'),
  successSignUp: Page.makeElementFrom('h3.c-login__title')
})

module.exports = MainPage
