---
title: Install and Remove
slug: transactions
project: parun
category: Commands
order: 6
---

## Install and Remove

Parun exits the alternate terminal UI before running install or remove transactions. This lets the underlying package manager show its normal prompts and output.

### Install

Press `ENTER` to install:

- The focused package, if nothing is selected
- All selected packages, if one or more packages are selected

System packages are passed as `repo/name` targets when installing. Nimble packages are passed by package name.

### Remove

Press `CTRL+R` to remove:

- The focused package, if nothing is selected
- All selected packages, if one or more packages are selected

Remove transactions pass package names without repository prefixes.

### Transaction tools

Parun routes transactions by source. System plugin priority is `paru`, then `yay`, then `pacman`.

| Source              | Tool                                                               |
| ------------------- | ------------------------------------------------------------------ |
| Pacman repositories | `paru`, `yay`, or `pacman`                                         |
| AUR                 | `paru`, `yay`, or `pacman` plugin path, depending on detected tool |
| Nimble              | `nimble`                                                           |
