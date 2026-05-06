---
title: Troubleshooting
slug: troubleshooting
project: parun
category: Advanced
order: 9
---

## Troubleshooting

### `parun: unknown option`

Run:

<div class="code-block"><pre>parun --help</pre></div>

Supported public options are:

<div class="code-block"><pre>-h, --help
-v, --version
-n, --noinfo
--perf-out=PATH
--pacman
--aur
--nimble
--nim</pre></div>

### No source selected

If explicit source flags are used but no source is enabled, Parun exits with:

<div class="code-block"><pre>parun: no package source selected; use --pacman, --aur, or --nimble.</pre></div>

Use at least one source flag:

<div class="code-block"><pre>parun --pacman
parun --aur
parun --nimble</pre></div>

### AUR or Nimble source is disabled

If you started Parun with explicit filters, prefixes cannot access sources that were not enabled. For example:

<div class="code-block"><pre>parun --pacman</pre></div>

In that session, `aur/foo` shows a disabled-source status. Start with the required sources:

<div class="code-block"><pre>parun --pacman --aur --nimble</pre></div>

### Index refresh fails

Parun needs working commands and network access for metadata refreshes:

- `pacman -Sl --color never`
- `pacman -Q`
- `curl`
- `gunzip`
- `nimble list -i --noColor` when Nimble is enabled

If a cache looks stale or corrupt, remove the cache directory and restart:

<div class="code-block"><pre>rm -rf ~/.cache/parun
parun</pre></div>

### Installer dependency errors

The install script checks for:

- `curl`
- `file`
- `sha256sum`
- `xxd`
- `readelf`

On Arch Linux, `xxd` is commonly provided by `vim` or the `xxd` package, and `readelf` is provided by `binutils`.

### `~/.local/bin` is not in PATH

The installer writes to `~/.local/bin`. Add it to your shell profile:

<div class="code-block"><pre>export PATH="$HOME/.local/bin:$PATH"</pre></div>
