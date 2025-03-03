'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _inquirer = _interopRequireDefault(require('inquirer'))

var _prompts = _interopRequireWildcard(require('./prompts'))

var _configurationVault = _interopRequireDefault(
  require('../../utils/configurationVault')
)

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const config = () => {
  _inquirer.default.prompt((0, _prompts.default)()).then((answers) => {
    _configurationVault.default.setAutoAdd(
      answers[_prompts.CONFIGURATION_PROMPT_NAMES.AUTO_ADD]
    )

    _configurationVault.default.setEmojiFormat(
      answers[_prompts.CONFIGURATION_PROMPT_NAMES.EMOJI_FORMAT]
    )

    _configurationVault.default.setSignedCommit(
      answers[_prompts.CONFIGURATION_PROMPT_NAMES.SIGNED_COMMIT]
    )

    _configurationVault.default.setScopePrompt(
      answers[_prompts.CONFIGURATION_PROMPT_NAMES.SCOPE_PROMPT]
    )
  })
}

var _default = config
exports.default = _default
