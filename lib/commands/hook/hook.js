'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
const HOOK = {
  PERMISSIONS: 0o775,
  PATH: '/hooks/prepare-commit-msg',
  CONTENTS: `#!/bin/sh
# gitmoji as a commit hook
if test -t 1 && ! grep -q -m 1 '^[^#]' $1; then
  # it has been invoked from a tty and no commit message is already set
  exec < /dev/tty
  gitmoji --hook $1
fi
`
}
var _default = HOOK
exports.default = _default
