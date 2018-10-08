versioning-tool
===============

CLI tool for updating npm package version and tagging git repos for release.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/versioning-tool.svg)](https://npmjs.org/package/versioning-tool)
[![CircleCI](https://circleci.com/gh/theBenForce/versioning-tool/tree/master.svg?style=shield)](https://circleci.com/gh/theBenForce/versioning-tool/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/theBenForce/versioning-tool?branch=master&svg=true)](https://ci.appveyor.com/project/theBenForce/versioning-tool/branch/master)
[![Codecov](https://codecov.io/gh/theBenForce/versioning-tool/branch/master/graph/badge.svg)](https://codecov.io/gh/theBenForce/versioning-tool)
[![Downloads/week](https://img.shields.io/npm/dw/versioning-tool.svg)](https://npmjs.org/package/versioning-tool)
[![License](https://img.shields.io/npm/l/versioning-tool.svg)](https://github.com/theBenForce/versioning-tool/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
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
# Commands
<!-- commands -->
* [`vt current [FILE]`](#vt-current-file)
* [`vt help [COMMAND]`](#vt-help-command)
* [`vt update`](#vt-update)

## `vt current [FILE]`

describe the command here

```
USAGE
  $ vt current [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
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

Adds a git tag for next version and (optionally) update package.json to match.

```
USAGE
  $ vt update

OPTIONS
  -h, --help             show CLI help
  -m, --message=message  The message you want attached to the git tag
  -p, --package          Update package.json with the new version number
```

_See code: [src/commands/update.ts](https://github.com/theBenForce/versioning-tool/blob/v2018.10.5-1/src/commands/update.ts)_
<!-- commandsstop -->
