const casual = require('casual')

module.exports = (email) => {
  const emailAddress = 'testEmailAddress' + casual.word // + '@sharklasers.com'
  browser.url('https://www.guerrillamail.com/inbox')
  const emailBtn = $('#inbox-id')
  // const emailTxt = $('#inbox-id . input[type="text"]')
  const emailSave = $('#inbox-id button.save.button.small')
  emailBtn.waitForVisible()
  emailBtn.click()
  emailBtn.$('input').setValue(emailAddress)
  emailBtn.$('button.save.button.small').click()
}
