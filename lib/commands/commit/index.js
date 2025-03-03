'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _inquirer = _interopRequireDefault(require('inquirer'))

var _getEmojis = _interopRequireDefault(require('../../utils/getEmojis'))

var _prompts = _interopRequireDefault(require('./prompts'))

var _withHook = _interopRequireDefault(require('./withHook'))

var _withClient = _interopRequireDefault(require('./withClient'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const commit = (mode) => {
  return (0, _getEmojis.default)()
    .then((gitmojis) => (0, _prompts.default)(gitmojis))
    .then((questions) => {
      _inquirer.default.prompt(questions).then((answers) => {
        if (mode === 'hook') return (0, _withHook.default)(answers)
        return (0, _withClient.default)(answers)
      })
    })
}

var _default = commit
exports.default = _default
