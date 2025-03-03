'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _execa = _interopRequireDefault(require('execa'))

var _fs = _interopRequireDefault(require('fs'))

var _chalk = _interopRequireDefault(require('chalk'))

var _isHookCreated = _interopRequireDefault(
  require('../../../utils/isHookCreated')
)

var _configurationVault = _interopRequireDefault(
  require('../../../utils/configurationVault')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const withClient = async (answers) => {
  try {
    const scope = answers.scope ? `(${answers.scope}): ` : ''
    const title = `${answers.gitmoji} ${scope}${answers.title}`
    const isSigned = _configurationVault.default.getSignedCommit() ? ['-S'] : []

    if (await (0, _isHookCreated.default)()) {
      return console.log(
        _chalk.default.red(
          "\nError: Seems that you're trying to commit with the cli " +
            'but you have the hook created.\nIf you want to use the `gitmoji -c` ' +
            'command you have to remove the hook with the command `gitmoji -r`. \n' +
            'The hook must be used only when you want to commit with the instruction `git commit`\n'
        )
      )
    }

    if (_configurationVault.default.getAutoAdd())
      await (0, _execa.default)('git', ['add', '.'])
    const { stdout } = await (0, _execa.default)('git', [
      'commit',
      ...isSigned,
      '-m',
      title,
      '-m',
      answers.message
    ])
    console.log(stdout)
  } catch (error) {
    console.error(error)
  }
}

var _default = withClient
exports.default = _default
