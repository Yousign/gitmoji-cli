'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _getEmojis = _interopRequireDefault(require('../../utils/getEmojis'))

var _printEmojis = _interopRequireDefault(require('../../utils/printEmojis'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const search = (query) => {
  console.log('query', query)
  return (0, _getEmojis.default)()
    .then((gitmojis) => {
      return gitmojis.filter((gitmoji) => {
        const emoji = gitmoji.name.concat(gitmoji.description).toLowerCase()
        return emoji.indexOf(query.toLowerCase()) !== -1
      })
    })
    .then((gitmojisFiltered) => (0, _printEmojis.default)(gitmojisFiltered))
    .catch((err) => console.error(err))
}

var _default = search
exports.default = _default
