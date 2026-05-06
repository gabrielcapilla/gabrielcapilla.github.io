---
title: Categories
slug: categories
project: dotman
category: Core Concepts
order: 4
---

## Categories

Dotman automatically categorizes files based on their destination path. Each category maps to a specific system location. When adding files, dotman automatically links them in the correct path. For example:

<div class="code-block"><pre># config/nvim → ~/.config/nvim
dotman add nvim

# share/fonts → ~/.local/share/fonts

dotman add fonts</pre></div>
