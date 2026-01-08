---
title: Categories
slug: categories
category: Core Concepts
order: 4
---

## Categories

Dotman automatically categorizes files based on their destination path. Each category maps to a specific system location:

<ul class="docs-grid">
    <li class="docs-card">
        <span class="font-mono text-white" style="font-size: 1.125rem; min-width: 4rem;">home/</span>
        <span style="color: #9ca3af;">→</span>
        <span class="font-mono text-muted" style="font-size: 1.125rem;">~/</span>
    </li>
    <li class="docs-card">
        <span class="font-mono text-white" style="font-size: 1.125rem; min-width: 4rem;">config/</span>
        <span style="color: #9ca3af;">→</span>
        <span class="font-mono text-muted" style="font-size: 1.125rem;">~/.config/</span>
    </li>
    <li class="docs-card">
        <span class="font-mono text-white" style="font-size: 1.125rem; min-width: 4rem;">bin/</span>
        <span style="color: #9ca3af;">→</span>
        <span class="font-mono text-muted" style="font-size: 1.125rem;">~/.local/bin/</span>
    </li>
    <li class="docs-card">
        <span class="font-mono text-white" style="font-size: 1.125rem; min-width: 4rem;">share/</span>
        <span style="color: #9ca3af;">→</span>
        <span class="font-mono text-muted" style="font-size: 1.125rem;">~/.local/share/</span>
    </li>
</ul>

When adding files, dotman automatically links them in the correct path. For example:

<div class="code-block"><pre># config/nvim → ~/.config/nvim
dotman add nvim

# share/fonts → ~/.local/share/fonts

dotman add fonts</pre></div>
