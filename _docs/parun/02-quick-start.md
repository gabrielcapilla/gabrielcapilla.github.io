---
title: Quick Start
slug: quick-start
project: parun
category: Getting Started
order: 2
---

## Quick Start

Run Parun without arguments to start in local Pacman mode:

<div class="code-block"><pre>parun</pre></div>

Type to search. The result list updates as you edit the query. Press `ENTER` to install the focused package, or select multiple packages with `TAB` and press `ENTER` to install the selected set.

### Common launches

<div class="code-block"><pre># Show help
parun --help

# Show version

parun --version

# Start with the details panel hidden

parun --noinfo

# Start with AUR enabled as the initial source

parun --aur

# Start with Nimble enabled as the initial source

parun --nimble

# Search across selected sources by default

parun --pacman --aur --nimble</pre></div>

### Default behavior

By default, Parun enables Pacman, AUR, and Nimble indexes, but the initial view is local Pacman packages. Use search prefixes to switch sources without restarting:

<div class="code-block"><pre>aur/yay
nim/jester
installed/git</pre></div>

### Explicit source filters

If you pass any source flag, the flags define the allowed source set. For example:

<div class="code-block"><pre>parun --aur --nimble</pre></div>

In that mode, Pacman is not enabled unless you include `--pacman`. Unprefixed search uses the combined selected sources when more than one source is enabled.
