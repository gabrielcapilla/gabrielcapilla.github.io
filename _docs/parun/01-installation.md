---
title: Installation
slug: installation
project: parun
category: Getting Started
order: 1
---

## Installation

Parun is a terminal UI for Arch Linux package management. It works with local Pacman repositories, AUR helpers, and Nimble packages from one interface.

### Install the binary

The installer downloads the latest GitHub release, validates that the downloaded file is a 64-bit ELF executable, and installs it into `~/.local/bin`.

<div class="code-block"><pre>curl -sL gabrielcapilla.github.io/install | bash -s parun</pre></div>

<!--Make sure `~/.local/bin` is in your `PATH`:

<div class="code-block"><pre>export PATH="$HOME/.local/bin:$PATH"</pre></div>-->

### Install via Nimble

Requirements:

- Nim 2.2.0 or later

<div class="code-block"><pre>nimble install https://github.com/gabrielcapilla/parun.git@#head</pre></div>

### Build from source

Clone the repository and build the release binary:

<div class="code-block"><pre>git clone https://github.com/gabrielcapilla/parun.git
cd parun
nimble build -d:release
cp "$(pwd)/parun" "$HOME/.local/bin/"</pre></div>

### Release builds

Parun includes Nimble tasks for reproducible and local optimized builds:

<div class="code-block"><pre># Deterministic release build
nimble release

# Host-optimized build for your own machine

nimble releaseNative

# Portable release check that rejects x86-64-v3/v4-only output

nimble releasePortable</pre></div>

Use `releaseNative` only for local use. Distribution builds should use `release` or `releasePortable`.
