'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.GITMOJIS_URL = void 0

var _chalk = _interopRequireDefault(require('chalk'))

var _nodeFetch = _interopRequireDefault(require('node-fetch'))

var _ora = _interopRequireDefault(require('ora'))

var _emojisCache = _interopRequireDefault(require('./emojisCache'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const GITMOJIS_URL =
  'https://raw.githubusercontent.com/Yousign/gitmoji-cli/custom/src/data/gitmojis.json'
exports.GITMOJIS_URL = GITMOJIS_URL

const getEmojis = (skipCache = false) => {
  if (_emojisCache.default.isAvailable() && !skipCache)
    return _emojisCache.default.getEmojis()
  const spinner = (0, _ora.default)('Fetching the emoji list').start()
  return (0, _nodeFetch.default)(GITMOJIS_URL)
    .then((response) => response.json())
    .then((data) => {
      const emojis = data.gitmojis

      _emojisCache.default.createEmojis(emojis)

      spinner.succeed('Gitmojis fetched successfully')
      return emojis
    })
    .catch((error) => {
      spinner.fail(`Error: ${error}`)
    })
}

var _default = getEmojis
exports.default = _default
