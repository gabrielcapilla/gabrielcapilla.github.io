---
layout: page
title: Projects
description: A collection of open source tools and experiments.
permalink: /projects/
context: hub
back_link: true
---

<div class="projects-grid">
    <a href="/projects/dotman/" class="project-card featured">
        <div class="card-glow"></div>

        <div class="card-content">
            <div>
                <div class="card-header">
                    <div class="project-icon">~</div>
                    <div class="status-badge">Active</div>
                </div>
                <h3 class="project-title">dotman</h3>
                <p class="project-desc">
                    The modern dotfiles manager for Linux. Native
                    performance, zero dependencies, multi-profile
                    support.
                </p>
            </div>

            <div class="card-footer">
                View Project
                {% include components/icon.html name='arrow-right' %}
            </div>
        </div>
    </a>

    {% for project in site.projects %}
    {% endfor %}

    <div class="project-card placeholder">
        <div class="card-content">
            <div>
                <div class="card-header">
                    <div class="project-icon">
                        {% include components/icon.html name='package' %}
                    </div>
                </div>
                <h3 class="project-title" style="opacity: 0.8">Parun</h3>
                <p class="project-desc" style="opacity: 0.5">
                    A powerful terminal-based package manager for Pacman, Aur, and Nimble.
                </p>
            </div>
            <div class="card-footer-placeholder">Coming soon</div>
        </div>
    </div>

</div>
