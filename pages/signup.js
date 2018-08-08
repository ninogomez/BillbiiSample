const SignUpPage = {
  atThisPage: () => {
    let firtName = $('input[name=firstName]')
    firtName.waitForVisible()
    return firtName.isVisible()
  },
  inputFirstName: (text) => {
    $('input[name=firstName]').setValue(text)
  },
  inputLastName: (text) => {
    $('input[name=lastName]').setValue(text)
  },
  inputEmail: (text) => {
    $('input[name=email]').setValue(text)
  },
  inputBusinessName: (text) => {
    $('input[name=businessName]').setValue(text)
  },
  inputUsername: (text) => {
    // $('input[name=username]').setValue(text)
    $('input[ng-model="vm.formObjSignup.username"]').setValue(text)
  },
  inputPassword: (text) => {
    $('input[ng-model="vm.formObjSignup.password"]').setValue(text)
  },
  inputConfirmPassword: (text) => {
    $('input[ng-model="vm.formObjSignup.confirmPassword"]').setValue(text)
  }
}

module.exports = SignUpPage
