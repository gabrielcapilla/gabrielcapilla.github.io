---
title: Keyboard Controls
slug: keyboard
project: parun
category: Core Concepts
order: 5
---

## Keyboard Controls

Parun is keyboard-first. All core actions can be performed without leaving the terminal UI.

|                Key | Action                                       |
| -----------------: | :------------------------------------------- |
|              `Esc` | Quit                                         |
|               `F1` | Toggle the details panel                     |
|   `Up` or `CTRL+K` | Move down the package list                   |
| `Down` or `CTRL+J` | Move up the package list                     |
|          `Page Up` | Move down by one page                        |
|        `Page Down` | Move up by one page                          |
|              `TAB` | Select or deselect the focused package       |
|           `CTRL+S` | Toggle selected-package review mode          |
|            `ENTER` | Install focused package or selected packages |
|           `Ctrl+R` | Remove focused package or selected packages  |

### Selection workflow

Use `TAB` to build a batch of packages:

1. Search for a package.
2. Move to the package with the arrow keys.
3. Press `TAB` to select it.
4. Repeat for additional packages.
5. Press `CTRL+S` to review only selected packages.
6. Press `ENTER` to install or `CTRL+R` to remove.

The status bar shows the selected count while packages are selected.
