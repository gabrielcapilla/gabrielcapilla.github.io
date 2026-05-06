---
title: Indexes and Cache
slug: indexes-cache
project: parun
category: Advanced
order: 7
---

## Indexes and Cache

Parun does not parse large package metadata on every keystroke. It builds compact runtime indexes and searches those indexes from memory-mapped files.

### Cache directory

The default cache directory is:

<div class="code-block"><pre>~/.cache/parun</pre></div>

Set `PARUN_CACHE_DIR` to use another location:

<div class="code-block"><pre>PARUN_CACHE_DIR=/tmp/parun-cache parun</pre></div>

### Runtime indexes

Parun creates `.prix` index files for enabled sources:

<div class="code-block"><pre>system.prix
aur.prix
nimble.prix
merged.system-aur-nimble.prix</pre></div>

Single-source sessions use the matching source index. Multi-source sessions can use a merged index so unprefixed search can cover the selected source set.

### Metadata sources

Parun builds indexes from:

| Source                    | Metadata                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------- |
| Pacman                    | `pacman -Sl --color never`                                                            |
| Installed system packages | `pacman -Q`                                                                           |
| AUR                       | `https://aur.archlinux.org/packages-meta-v1.json.gz`                                  |
| Nimble                    | `https://raw.githubusercontent.com/nim-lang/packages/refs/heads/master/packages.json` |
| Installed Nimble packages | `nimble list -i --noColor`                                                            |

### Refresh behavior

Missing or invalid indexes are rebuilt synchronously at startup. Stale but valid indexes can be used immediately while Parun starts a background refresh.

The default freshness window is one hour. Override it with:

<div class="code-block"><pre>PARUN_INDEX_MAX_AGE_SECONDS=300 parun</pre></div>

Use a positive integer value. Invalid or non-positive values fall back to the default.
