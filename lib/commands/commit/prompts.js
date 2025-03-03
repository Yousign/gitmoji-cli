'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _inquirer = _interopRequireDefault(require('inquirer'))

var _configurationVault = _interopRequireDefault(
  require('../../utils/configurationVault')
)

var _guard = _interopRequireDefault(require('./guard'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const TITLE_MAX_LENGTH_COUNT = 48

_inquirer.default.registerPrompt(
  'autocomplete',
  require('inquirer-autocomplete-prompt')
)

var _default = (gitmojis) => [
  {
    name: 'gitmoji',
    message: 'Choose a gitmoji:',
    type: 'autocomplete',
    source: (answersSoFor, input) => {
      return Promise.resolve(
        gitmojis
          .filter((gitmoji) => {
            const emoji = gitmoji.name.concat(gitmoji.description).toLowerCase()
            return !input || emoji.indexOf(input.toLowerCase()) !== -1
          })
          .map((gitmoji) => ({
            name: `${gitmoji.emoji}  - ${gitmoji.description}`,
            value: gitmoji[_configurationVault.default.getEmojiFormat()]
          }))
      )
    }
  },
  ...(_configurationVault.default.getScopePrompt()
    ? [
        {
          name: 'scope',
          message: 'Enter the scope of current changes:',
          validate: _guard.default.scope
        }
      ]
    : []),
  {
    name: 'title',
    message: 'Enter the commit title',
    validate: _guard.default.title,
    transformer: (input) => {
      return `[${input.length}/${TITLE_MAX_LENGTH_COUNT}]: ${input}`
    }
  },
  {
    name: 'message',
    message: 'Enter the commit message:',
    validate: _guard.default.message
  }
]

exports.default = _default
