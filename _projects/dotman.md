---
layout: default
title: Dotman
context: dotman
permalink: /projects/dotman/
redirect_from:
  - /dotman/
  - /dotman
---

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-symbol">~</div>
    <h1 class="hero-title">The Modern <br />Dotfiles Manager</h1>
    <p class="hero-subtitle">
        Stop fighting with broken symlinks. Dotman just works.<br class="hidden-mobile">
        The faster, smarter alternative to GNU Stow written in Nim.
    </p>

    <div style="margin-top: 1.5rem;">
        <a href="#install" class="btn-primary">
            <svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Get Started
        </a>
    </div>

    <!-- Terminal Mockup -->
    <div class="terminal-wrapper">
        <div class="terminal">
            <div class="terminal-header">
                <div class="window-controls">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                </div>
                <div class="terminal-title">dotman — bash</div>
                <div style="width: 3.5rem;"></div>
            </div>
            <div class="terminal-body">
                <div class="cmd-line">
                    <div class="cmd-prompt">
                        <span class="prompt-arrow">➜</span>
                        <span class="prompt-tilde">~</span>
                        <span>dotman init</span>
                    </div>
                    <div class="cmd-output">Initialized at <span style="color: #d97706;">~/.dotfiles</span></div>
                </div>

                <div class="cmd-line">
                    <div class="cmd-prompt">
                        <span class="prompt-arrow">➜</span>
                        <span class="prompt-tilde">~</span>
                        <span>dotman set ~/.config/nvim</span>
                    </div>
                    <div class="cmd-output">Set: ~/.config/nvim → <span style="color: #d97706;">~/.dotfiles/main/config/nvim</span></div>
                </div>

                <div class="cmd-line">
                    <div class="cmd-prompt">
                        <span class="prompt-arrow">➜</span>
                        <span class="prompt-tilde">~</span>
                        <span>dotman add fish</span>
                    </div>
                    <div class="cmd-output">
                        <span style="color: #9ca3af; font-style: italic;">Validating links...</span><br>
                        Creating symlinks... <span style="color: #16a34a;">Done</span>
                    </div>
                </div>

                <div class="cmd-line">
                    <div class="cmd-prompt">
                        <span class="prompt-arrow">➜</span>
                        <span class="prompt-tilde">~</span>
                        <span class="cursor"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<!-- Features Section -->
<section id="features" class="features-section">
    <div class="features-grid">
        <div>
            <h2 class="feature-title-main">Native performance,<br>not a script</h2>
            <div class="feature-text">
                <p>
                    Dotman handles symlinks, conflict resolution, and profile
                    management natively. Unlike GNU Stow which relies on Perl,
                    or other tools that need Python or Node.js runtimes.
                </p>
                <br />
                <p>
                    It compiles to a single, static binary. No dependencies to
                    install, no version conflicts to debug.
                </p>
            </div>
        </div>

        <div style="padding-top: 1rem;">
            <div class="sub-feature">
                <h3>Smart by design</h3>
                <p class="feature-text">
                    Dotman doesn't just blindly link files. It intelligently
                    detects existing configurations, offering to back them up or
                    resolve conflicts automatically.
                </p>
            </div>
            <div class="sub-feature">
                <h3>Multi-profile architecture</h3>
                <p class="feature-text">
                    Manage work, personal, and server configurations from a
                    single repository. Switch contexts seamlessly with `dotman
                    switch`.
                </p>
            </div>
            <div class="sub-feature">
                <h3>Intuitive syntax</h3>
                <p class="feature-text">
                    Commands like `add`, `sync`, and `restore` do exactly what
                    you expect them to do. Everything just makes sense.
                </p>
            </div>
        </div>
    </div>

</section>

<!-- Community Section -->
<section class="community-section">
    <div style="display: flex; justify-content: center; margin-bottom: 2.5rem">
        <svg class="icon" viewBox="0 0 24 24" style="width: 42px; height: 42px">
            <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            ></path>
        </svg>
    </div>
    <h2 class="hero-title" style="font-size: 2.5rem; margin-bottom: 1.5rem">
        The dotfiles manager<br />made with love
    </h2>
    <p class="hero-subtitle">
        We're making a tool that we enjoy using ourselves. Dotman's main goal is
        to provide an honest, comfortable, and predictable configuration
        management experience.
    </p>
</section>

<!-- Install Section -->
<section id="install" class="install-section">
    <h2 class="hero-title" style="font-size: 3rem; margin-bottom: 1.5rem">
        Install in seconds
    </h2>
    <p class="hero-subtitle">
        No dependencies, no complex setup. Just a single binary ready to run.
    </p>

    <!-- Code Copy Block -->
    <div class="code-box-display" data-copy="curl -sL gabrielcapilla.github.io/install | sh -s dotman" data-tooltip="main-copy-tooltip">
        <div class="code-content">
            <span class="gray">$</span> <span class="yellow">curl</span> -sL gabrielcapilla.github.io/install <span class="gray">|</span> <span class="yellow">sh</span> -s dotman
        </div>
        <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 1rem;">
            <svg class="icon copy-icon" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </div>
        <div id="main-copy-tooltip" class="tooltip">Copied to clipboard</div>
    </div>

    <div style="color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
        <span>Prefer Nimble?</span>
        <div class="nimble-box" data-copy="nimble install dotman" data-tooltip="nimble-copy-tooltip">
            <code>nimble install dotman</code>
            <svg class="icon" viewBox="0 0 24 24" style="width: 14px; height: 14px; opacity: 0.7;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <div id="nimble-copy-tooltip" class="tooltip">Copied</div>
        </div>
    </div>

</section>
