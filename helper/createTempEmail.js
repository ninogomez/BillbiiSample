module.exports = (userObj, type) => {
  const emailAddress = userObj.email

  browser.url('https://www.mailinator.com/')

  let emailBox = $('#inboxfield')
  emailBox.setValue(emailAddress)

  let submitBtn = $('span.input-group-btn > button')
  submitBtn.click()

  browser.pause(2000)
  let emailSubject = $('div*=Welcome to Billbii')
  emailSubject.waitForVisible(20000)
  emailSubject.click()

  browser.pause(4000)
  browser.waitForExist('iframe[id=msg_body]')
  let myFrame = $('iframe[id=msg_body]').value
  browser.frame(myFrame)

  let activateEmail2 = $('a.btn')
  activateEmail2.click()

  browser.pause(10000)
}
