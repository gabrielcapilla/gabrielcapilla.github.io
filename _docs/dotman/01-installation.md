---
title: Installation
slug: installation
category: Getting Started
order: 1
---

## Installation

Dotman is built with Nim and can be installed via several methods.

### Install the binary (fastest method)

<div class="code-block"><pre>curl -fsSL gabrielcapilla.github.io/install | bash -s dotman</pre></div>

### Install via Nimble

**Requirements:** Nim 2.2.6 or later

<div class="code-block"><pre>nimble install https://github.com/gabrielcapilla/dotman.git@#head</pre></div>

### Install from Source

Clone the repository and build the binary:

<div class="code-block"><pre>git clone https://github.com/gabrielcapilla/dotman.git
cd dotman
nimble build
nimble install</pre></div>
