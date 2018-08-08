const casual = require('casual')
const helper = require('../../helper/testHelper.js')
const user = require('../../helper/user.js')
const signUpPage = require('../../pages/signup.js')

describe('Sign Up new user', () => {
  const emailAddress = 'emailTest' + casual.random + casual.word + '@mailinator.com'
  let userObj = {
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: emailAddress,
    emailComplete: emailAddress,
    businessName: casual.title,
    username: casual.username,
    password: 'password'
  }

  it('should navigate sign up page', () => {
    browser.url('https://stage.billbii.com/')
    user.goToSignUpPage()
    expect(signUpPage.atThisPage()).to.be.true
  })

  it('should fill up new user form and submit', () => {
    user.signUpNewUser(userObj)
    browser.pause(2000)
    let submitBtn = $$('button[class="btn btn-sm btn-success btn-rounded ' +
    'c-login__field-button c-buttons-spinner"]')
    submitBtn[submitBtn.length - 1].click()
    browser.pause(5000)
    let activationBox = $('div.p-activation-box > h3')
    activationBox.waitForVisible(20000)
    expect(activationBox.isVisible()).to.be.true
  })

  it('should activate account', () => {
    helper.createTempEmail(userObj, 2)
    browser.pause(3000)
    let successMsg = $('h3.c-login__title')
    // successMsg.waitForVisible(20000)
    expect(successMsg.getText()).to.equal('Congratulations!')
  })
})
