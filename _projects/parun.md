---
layout: project-home
title: parun - Arch Linux package manager
display_title: parun
description: The unified package manager for Arch Linux.
permalink: /projects/parun/
redirect_from:
  - /parun/
  - /parun
  - /paru
image:
  path: /assets/images/projects/parun/preview.webp
  alt: parun terminal package manager interface
seo:
  name: parun
  type: SoftwareApplication
  links:
    - https://github.com/gabrielcapilla/parun
status: Active
icon: package
icon_name: package
featured: true
show_on_home: true
home_order: 2
github_stars:
  show_in_cards: false
repository: https://github.com/gabrielcapilla/parun
docs_url: /projects/parun/docs/
docs_description: Comprehensive documentation for Parun.

landing:
  enabled: true
  hero:
    enabled: true
    visible: true
  features:
    enabled: true
    visible: true
  community:
    enabled: true
    visible: true
  install:
    enabled: true
    visible: true
  alternative_install:
    enabled: true
    visible: true

hero:
  title: parun
  show_symbol: true
  subtitle: Every package. Every repository.<br/> One elegant interface.

  visual: image
  image: /assets/images/projects/parun/preview.webp
  image_preload: /assets/images/projects/parun/preview-720.webp
  image_srcset: /assets/images/projects/parun/preview-720.webp 720w, /assets/images/projects/parun/preview-1120.webp 1120w, /assets/images/projects/parun/preview-1440.webp 1440w, /assets/images/projects/parun/preview.webp 1650w
  image_sizes: "(max-width: 768px) 92vw, 56rem"
  image_width: 1650
  image_height: 894
  image_alt: parun project preview

  cta_text: Experience parun
  cta_link: "#install"

  feature_title: Speed you can feel.<br />Power you can see.
  feature_description:
    Parun isn't just another frontend. It's a high-performance terminal experience
    built with Nim to give you instant, real-time control over your entire system.
    No lag. No complexity. Just pure management.
    <br/>
    <br/>
    Pacman, AUR, and Nimble seamlessly integrated. Search across every source simultaneously without ever switching tools.
    <br/>
    <br/>
    Context is everything. Toggle the info panel to reveal deep package metadata
    and descriptions instantly, keeping you informed without leaving the terminal.

features:
  # - title: Unified by Design
  #   description: >
  #     Pacman, AUR, and Nimble—seamlessly integrated. Search across every source
  #     simultaneously without ever switching tools.

  - title: Search at the Speed of Thought
    description: >
      Instant, real-time results as you type. Powerful prefixes let you narrow
      down your focus with surgical precision.

  # - title: Instant Intelligence
  #   description: >
  #     Context is everything. Toggle the info panel to reveal deep package metadata
  #     and descriptions instantly, keeping you informed without leaving your workflow.

  - title: Multi-Select Mastery
    description: >
      Batch operations done right. Select multiple packages across different
      repositories and handle them all in a single breath.

  - title: Built with Nim
    description: >
      Native performance written in Nim. A lightweight footprint that delivers
      heavyweight results, designed for those who value their time.

community:
  - title: For the Arch Community
    icon: layers
    description: >
      Built by an Arch user, for Arch users.
      <br/>
      Parun respects your time while making it more beautiful and efficient.

  - title: Open and Evolving
    description: >
      A tool that grows with you. Open source, transparent, and driven by
      the desire for a better terminal experience.

  - title: Simple. Precise. Fast.
    description: >
      We believe tools should get out of your way. Parun is designed to be
      invisible until you need it, and indispensable when you do.

install:
  title: Get it in seconds.
  subtitle: Simple installation for a powerful tool.
  # Just clone and build.

install_cmd: "curl -sL gabrielcapilla.github.io/install | bash -s parun"
install_display_cmd: "curl -sL gabrielcapilla.github.io/install | bash -s parun"

alternative_install:
  label: Prefer Nimble?
  options:
    - label: nimble install parun
      command: "nimble install https://github.com/gabrielcapilla/parun.git@#head"
      tooltip_id: "nimble-copy-tooltip"
---
