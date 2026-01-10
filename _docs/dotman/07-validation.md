---
title: Validation
slug: validation
category: Core Concepts
order: 7
---

## Validation

Dotman automatically validates symlinks before creating them to prevent conflicts and data loss:

<ul class="docs-grid">
    <li class="docs-card" style="font-size: 1rem; color: var(--text-muted);">Checks for existing files at the target location</li>
    <li class="docs-card" style="font-size: 1rem; color: var(--text-muted);">Detects conflicts with other profiles</li>
    <li class="docs-card" style="font-size: 1rem; color: var(--text-muted);">Validates directory structure</li>
    <li class="docs-card" style="font-size: 1rem; color: var(--text-muted);">Reports broken or orphaned symlinks</li>
</ul>
