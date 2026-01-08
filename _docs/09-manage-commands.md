---
title: Manage Commands
slug: manage-commands
category: Commands
order: 9
---

## Manage Commands

### set

Move a file or directory from the system to the current profile and create a symlink in its place.

<div class="code-block"><pre>dotman set &lt;file&gt;
dotman -s &lt;file&gt;</pre></div>

<div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; padding: 1rem; margin-top: 1rem; border-radius: 0 0.5rem 0.5rem 0; margin-bottom: 2rem;">
    <p style="margin: 0; font-size: 1rem; color: #bfdbfe;">
        <strong>set vs add:</strong> Use <code>set</code> to move existing files from your system into dotman management. Use <code>add</code> when files already exist in the profile and you just want to create symlinks.
    </p>
</div>

### unset

Remove a symlink and restore the original file or directory from the profile back to its system location.

<div class="code-block"><pre>dotman unset &lt;file&gt;
dotman -u &lt;file&gt;</pre></div>
