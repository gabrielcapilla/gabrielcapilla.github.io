---
title: Search
slug: search
project: parun
category: Core Concepts
order: 4
---

## Search

Parun is designed around live search. The package list is filtered as you type, and the bottom status bar shows the active mode and visible package count.

### Prefixes

Use prefixes at the beginning of the query to change search scope:

| Prefix       | Aliases      | Source             |
| ------------ | ------------ | ------------------ |
| `aur/`       | `a/`         | AUR                |
| `nimble/`    | `nim/`, `n/` | Nimble             |
| `installed/` | `i/`         | Installed packages |

Examples:

<div class="code-block"><pre>
# Search AUR

aur/fooyin
a/koi

# Search Nimble

nimble/nimlangserver
nim/malebolgia
n/nimony

# Search installed packages

installed/bash
i/steam

</pre></div>

### Prefix behavior

Prefixes are removed before matching. For example, `aur/fooyin` searches AUR for `fooyin`, not for the literal text `aur/fooyin`.

If a source is disabled by explicit startup flags, Parun keeps the search from switching and shows a status message such as:

<div class="code-block"><pre>AUR source disabled (enable with --aur)
Nimble source disabled (enable with --nimble)</pre></div>

### Installed filtering

`installed/` and `i/` filter the current source view to packages marked as installed. For Pacman and AUR, installed state comes from `pacman -Q`. For Nimble, installed state comes from `nimble list -i --noColor`.
