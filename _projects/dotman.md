---
layout: project-home
title: Dotman
nav_menu: dotman

hero:
  title: The Modern <br/> Dotfiles Manager
  subtitle: Stop fighting with broken symlinks. Dotman just works.<br class="hidden-mobile" /> The faster, smarter alternative to GNU Stow written in Nim.

  cta_text: Get Started
  cta_link: "#install"

  feature_title: Native performance
  feature_description:
    Dotman handles symlinks, conflict resolution, and profile management natively.
    No Python, no bloat.
    <br/>
    <br/>
    It compiles to a single, static binary. No dependencies to install, no version conflicts to debug. It doesn't slow down your shell startup or clutter your home directory with unnecessary files.
    <br/>
    <br/>
    We prioritize robustness. Dotman validates every link before creation and provides atomic operations to ensure your configuration never ends up in a broken state.

features:
  - title: Smart by design
    description: Dotman doesn't just blindly link files. It intelligently detects existing configurations, offering to back them up or resolve conflicts automatically. It respects your existing directory structure and adapts to it, not the other way around.

  - title: Multi-profile architecture
    description: Manage work, personal, and server configurations from a single repository. Switch contexts seamlessly with `set/unset` without complex Git branching strategies. Perfect for keeping separate configs for different machines.

  - title: Intuitive syntax
    description: Forget memorizing complex flags. The CLI is designed to be human-readable. Commands like `add`, `remove`, `set` and `unset` do exactly what you expect them to do. Everything just makes sense. You're in full control.

show_community: true

community:
  - title: The dotfiles manager<br/>made with love
    icon: heart
    description: We're making a tool that we enjoy using ourselves. Dotman's main goal is to provide an honest, comfortable, and predictable configuration management experience.

  - title: Perfect for power users
    description: Dotman respects your existing structure and doesn't break your workflow. It's designed to be transparent; no hidden databases, no proprietary formats. There's nothing that gets in your way of crafting the perfect terminal environment.

  - title: Perfect for distro hoppers
    description: Dotman's static binary compilation makes it essential for setting up fresh installs instantly. Split view configurations for different hostnames make it easier than ever to keep things synchronized across machines without logic duplication.

install:
  title: Install in seconds
  subtitle: No dependencies, no complex setup. Just a single binary ready to run.

install_cmd: "curl -sL gabrielcapilla.github.io/install | sh -s dotman"

alternative_install:
  label: Prefer Nimble?
  options:
    - label: nimble install dotman
      command: "nimble install https://github.com/gabrielcapilla/dotman.git@#head"
      tooltip_id: "nimble-copy-tooltip"

permalink: /projects/dotman/

redirect_from:
  - /dotman/
  - /dotman
---
