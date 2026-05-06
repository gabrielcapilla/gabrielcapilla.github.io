---
title: Package Sources
slug: sources
project: parun
category: Core Concepts
order: 3
---

## Package Sources

Parun can read from three package domains:

<ul class="docs-grid">
    <li class="docs-card">
        <div>{% include components/icon.html name='package' %}</div>
        <div><strong>Pacman</strong><br/>Local Arch repositories from `pacman -Sl`.</div>
    </li>
    <li class="docs-card">
        <div>{% include components/icon.html name='layers' %}</div>
        <div><strong>AUR</strong><br/>AUR metadata from the official packages metadata feed.</div>
    </li>
    <li class="docs-card">
        <div>{% include components/icon.html name='terminal' %}</div>
        <div><strong>Nimble</strong><br/>Nim package metadata from the Nim packages index.</div>
    </li>
</ul>

### Source selection flags

Use flags to control which sources are available in a session:

<div class="code-block"><pre># Local Pacman source
parun --pacman

# AUR source

parun --aur

# Nimble source

parun --nimble
parun --nim

# Combined source set

parun --pacman --aur --nimble</pre></div>

### Source priority

When explicit filters are used, Parun chooses the initial source in this order:

1. Pacman
2. AUR
3. Nimble

`--pacman` is not implied by `--aur`. If you want local repositories and AUR together, pass both:

<div class="code-block"><pre>parun --pacman --aur</pre></div>

### System plugin detection

For system package transactions, Parun picks the first available tool in this order:

1. `paru`
2. `yay`
3. `pacman`

The selected tool is used for install, uninstall, search/details support, and AUR-capable behavior when available.
