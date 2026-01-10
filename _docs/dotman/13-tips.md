---
title: Tips & Best Practices
slug: tips
category: Advanced
order: 13
---

## Tips & Best Practices

### Use Git with Dotman

Version control your dotfiles with Git by initializing a repository in ~/.dotfiles:

<div class="code-block"><pre>cd ~/.dotfiles
git init
git add .
git commit -m "Initial commit"</pre></div>

### Handle Conflicts

If dotman detects a conflict, resolve it by:

- Moving or deleting the conflicting file manually
- Using `--conflicts` flag to identify issues
- Checking which profile manages the file with `--other` flag

### Push/Pull Workflows

Switching configurations cleanly:

<div class="code-block"><pre># Clone your main profile and create an experimental profile
dotman clone main experimental

# Remove all symbolic links from the main profile

dotman pull main

# Link all files from the experimental profile to the system

dotman push experimental</pre></div>
