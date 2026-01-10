---
title: Status Commands
slug: status-commands
category: Commands
order: 11
---

## Status Commands

### status

Display the status of all files in the current main profile.

<div class="code-block"><pre>dotman status</pre></div>

**Options:**

- `--category <cat>` - Filter by category (config, share, home, local, bin)
- `--linked` - Show only linked files
- `--not-linked` - Show only unlinked files
- `--conflicts` - Show only conflicting files
- `--other` - Show other profile files
- `--verbose, -v` - Show detailed information
- `--profile <name>` - Use specific profile
- `--ascii` - Use ASCII characters in table

<div class="code-block"><pre>dotman status --category config
dotman status --linked --verbose
dotman status --conflicts
dotman status --profile work --ascii</pre></div>
