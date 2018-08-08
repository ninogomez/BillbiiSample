function Page (title) {
  this.title = title || 'Untitled Page'
}

Page.prototype.open = function (baseUrl, path) {
  browser.url(baseUrl + '/' + path)
}

Page.prototype.makeElementFrom = function (selector) {
  return {
    get: () => browser.element(selector)
  }
}

Page.prototype.makeElementsFrom = function (selector) {
  return {
    get: () => browser.elements(selector)
  }
}

Page.prototype.getInteractableElementText = function (selector) {
  return {
    get: function () {
      return browser.getText(selector)
    }
  }
}

module.exports = new Page()
