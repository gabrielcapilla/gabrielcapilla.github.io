---
title: Examples
slug: examples
category: Advanced
order: 14
---

## Examples

### Neovim Configuration

<div class="code-block"><pre># Move nvim config to profile and link it
dotman set ~/.config/nvim

# Check status of config category

dotman status --category config

# View detailed breakdown by subdirectory

dotman status --verbose</pre></div>

### Multi-Profile Workflow

<div class="code-block"><pre># Create profiles for different environments
dotman make exp
dotman make laptop

# Add experimental-specific config to experimental profile

dotman --profile exp set ~/.config/alacritty

# Check experimental profile status

dotman status --profile exp

# Remove a symlink and restore the original file or directory

dotman --profile exp unset alacritty</pre></div>
