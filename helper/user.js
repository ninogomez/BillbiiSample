const mainPage = require('../pages/main')
const signupPage = require('../pages/signup')

const user = {
  goToSignUpPage: () => {
    mainPage.signUpBtn.waitForVisible()
    mainPage.signUpBtn.click()
    browser.pause(2000)
  },
  signUpNewUser: (userObj) => {
    signupPage.inputFirstName(userObj.firstName)
    signupPage.inputLastName(userObj.lastName)
    signupPage.inputEmail(userObj.emailComplete)
    signupPage.inputBusinessName(userObj.businessName)
    signupPage.inputUsername(userObj.username)
    signupPage.inputPassword(userObj.password)
    signupPage.inputConfirmPassword(userObj.password)
  }
}

module.exports = user
