# versioning-tool

CLI tool for updating npm package version and tagging git repos for release.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/versioning-tool.svg)](https://npmjs.org/package/versioning-tool)
[![Build Status](https://travis-ci.com/theBenForce/versioning-tool.svg?branch=master)](https://travis-ci.com/theBenForce/versioning-tool)
[![Open Issues](https://img.shields.io/github/issues-raw/theBenForce/versioning-tool.svg)](https://github.com/theBenForce/versioning-tool/issues)
[![Downloads/week](https://img.shields.io/npm/dw/versioning-tool.svg)](https://npmjs.org/package/versioning-tool)
[![License](https://img.shields.io/npm/l/versioning-tool.svg)](https://github.com/theBenForce/versioning-tool/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g versioning-tool
$ vt COMMAND
running command...
$ vt (-v|--version|version)
versioning-tool/2018.10.5-1 darwin-x64 node-v10.1.0
$ vt --help [COMMAND]
USAGE
  $ vt COMMAND
...
```

<!-- usagestop -->

# Version Formatting

You can specify the date format that will be used by adding the following section to your package.json file:

```json
"versioning": {
  "date-format": "yyyy.mm.dd"
}
```

# Commands

<!-- commands -->

- [`vt current [FILE]`](#vt-current-file)
- [`vt help [COMMAND]`](#vt-help-command)
- [`vt update`](#vt-update)

## `vt current [FILE]`

Displays current version

```
USAGE
  $ vt current [FILE]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/current.ts](https://github.com/theBenForce/versioning-tool/blob/v2018.10.5-1/src/commands/current.ts)_

## `vt help [COMMAND]`

display help for vt

```
USAGE
  $ vt help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_

## `vt update`

Adds a git tag for next version and update package.json to match.

```
USAGE
  $ vt update

OPTIONS
  -h, --help             show CLI help
  -m, --message=message  The message you want attached to the git tag
  -p, --push             Run a git push and git push --tags after updating the version
```

_See code: [src/commands/update.ts](https://github.com/theBenForce/versioning-tool/blob/v2018.10.5-1/src/commands/update.ts)_

<!-- commandsstop -->
