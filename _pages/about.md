---
layout: page
title: About Me
description: Get to know me better - software developer and open source enthusiast
permalink: /about/
sitemap: false
robots: noindex
published: true
hidden: true
---

<div class="about-container">
    <!-- Hero Section -->
    <header class="about-hero">
        <div class="about-hero-content">
            <h1 class="about-title">About <em>Me</em></h1>
            <p class="about-subtitle">Software Developer • Open Source Enthusiast • Tool Builder</p>
        </div>
        <div class="about-image">
            <img
                src="/assets/preview.webp"
                alt="Gabriel Capilla - Software Developer"
                width="400"
                height="400"
                class="about-avatar lazy-load"
                loading="lazy"
                decoding="async"
            />
        </div>
    </header>

    <!-- Bio Section -->
    <section class="about-section">
        <div class="about-content">
            <h2 class="section-title">Who I Am</h2>
            <div class="about-text">
                <p>Hello! I'm Gabriel Capilla, a passionate software developer who loves building tools that make developers' lives easier. I believe in the power of clean code, thoughtful design, and open source collaboration.</p>

                <p>My journey in software development has been driven by curiosity and a desire to solve real problems. Whether it's crafting elegant command-line utilities or building modern web applications, I approach every project with attention to detail and a commitment to quality.</p>

                <blockquote class="about-quote">
                    <p>Code is poetry written for machines to execute and humans to understand.</p>
                    <cite>— Unknown</cite>
                </blockquote>

                <p>I'm deeply committed to the open source community. I contribute to projects that I use daily, and I build tools that others might find useful. Sharing knowledge and collaborating with fellow developers brings me joy and helps us all grow together.</p>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="about-section">
        <div class="about-content">
            <h2 class="section-title">What I Do</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">
                        {% include components/icon.html name='terminal' %}
                    </div>
                    <h3 class="skill-title">Command-Line Tools</h3>
                    <p class="skill-description">Building efficient CLI tools in Nim and Bash. Focus on performance, usability, and zero dependencies.</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        {% include components/icon.html name='layers' %}
                    </div>
                    <h3 class="skill-title">Web Development</h3>
                    <p class="skill-description">Creating modern, responsive websites with HTML, CSS, JavaScript, and Jekyll. Passionate about accessibility.</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        {% include components/icon.html name='book' %}
                    </div>
                    <h3 class="skill-title">Documentation</h3>
                    <p class="skill-description">Writing clear, comprehensive documentation that helps users and developers understand complex systems.</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        {% include components/icon.html name='heart' %}
                    </div>
                    <h3 class="skill-title">Open Source</h3>
                    <p class="skill-description">Actively contributing to the community. Believer in free software and collaborative development.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Philosophy Section -->
    <section class="about-section">
        <div class="about-content">
            <h2 class="section-title">My Philosophy</h2>
            <div class="philosophy-grid">
                <div class="philosophy-item">
                    <h3 class="philosophy-title">
                        {% include components/icon.html name='check' %}
                        Simplicity First
                    </h3>
                    <p>Complexity is the enemy of reliability. I strive to build tools that are intuitive, easy to maintain, and do one thing well.</p>
                </div>
                <div class="philosophy-item">
                    <h3 class="philosophy-title">
                        {% include components/icon.html name='check' %}
                        User-Centered
                    </h3>
                    <p>Every feature should solve a real user problem. I prioritize developer experience and usability above all else.</p>
                </div>
                <div class="philosophy-item">
                    <h3 class="philosophy-title">
                        {% include components/icon.html name='check' %}
                        Performance Matters
                    </h3>
                    <p>Fast, efficient code is better code. I optimize for performance while maintaining readability and maintainability.</p>
                </div>
                <div class="philosophy-item">
                    <h3 class="philosophy-title">
                        {% include components/icon.html name='check' %}
                        Continuous Learning
                    </h3>
                    <p>Technology evolves rapidly. I stay curious, learn new tools, and adapt to changing landscapes.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="about-section">
        <div class="about-content">
            <h2 class="section-title">Tech Stack</h2>
            <div class="tech-tags">
                <span class="tech-tag">Nim</span>
                <span class="tech-tag">Bash</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">HTML5</span>
                <span class="tech-tag">CSS3</span>
                <span class="tech-tag">SASS</span>
                <span class="tech-tag">Jekyll</span>
                <span class="tech-tag">Git</span>
                <span class="tech-tag">Linux</span>
                <span class="tech-tag">Terminal</span>
                <span class="tech-tag">Vim/Neovim</span>
            </div>
        </div>
    </section>

    <!-- Connect Section -->
    <section class="about-section">
        <div class="about-content">
            <h2 class="section-title">Let's Connect</h2>
            <p class="about-cta-text">
                I'm always interested in collaborating on interesting projects, discussing ideas, or just connecting with fellow developers. Feel free to reach out!
            </p>
            <div class="connect-actions">
                <a href="{% if site.data.settings.contact.email %}mailto:{{ site.data.settings.contact.email }}{% else %}/contact/{% endif %}" class="btn btn-primary btn-large">
                    {% include components/icon.html name='pen' %}
                    Send Me an Email
                </a>
            </div>
            <div class="social-links">
                {% for social in site.data.social.social %}
                <a href="{{ social[1].url }}" target="_blank" class="social-link">
                    {{ social[1].label }}
                    <span class="social-icon">
                        {% include components/icon.html name='arrow-right' %}
                    </span>
                </a>
                {% endfor %}
            </div>
        </div>
    </section>

    <!-- Projects CTA -->
    <section class="about-section about-cta">
        <div class="about-content">
            <h2 class="section-title">Check Out My Work</h2>
            <p class="cta-description">
                Interested in seeing what I've built? Explore my open source projects and tools.
            </p>
            <div class="cta-buttons">
                <a href="/projects/" class="btn btn-primary btn-large">
                    {% include components/icon.html name='layers' %}
                    View Projects
                </a>
                <a href="https://github.com/gabrielcapilla" target="_blank" class="btn btn-primary btn-large btn-secondary">
                    {% include components/icon.html name='github' %}
                    GitHub Profile
                </a>
            </div>
        </div>
    </section>

</div>

<style>
/* About Page Styles */

.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Hero Section */

.about-hero {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 4rem;
    align-items: center;
    margin-bottom: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
}

.about-hero-content {
    .about-title {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: var(--text-white);
        line-height: 1.2;

        em {
            background: linear-gradient(135deg, var(--sky-start), var(--sky-end));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-style: normal;
        }
    }

    .about-subtitle {
        font-size: 1.25rem;
        color: var(--text-muted);
        line-height: 1.6;
    }
}

.about-image {
    display: flex;
    justify-content: center;
    align-items: center;

    .about-avatar {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 50%;
        border: 4px solid var(--border-color);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
}

/* Sections */

.about-section {
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-white);
    text-align: center;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-text {
    line-height: 1.8;

    p {
        margin-bottom: 1.5rem;
        color: var(--text-muted);
        font-size: 1.1rem;
    }
}

.about-quote {
    margin: 2rem 0;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-left: 4px solid var(--sky-end);
    border-radius: 0.5rem;

    p {
        font-size: 1.25rem;
        font-style: italic;
        color: var(--text-white);
        margin-bottom: 0.5rem;
        text-align: center;
    }

    cite {
        display: block;
        text-align: right;
        color: var(--text-muted-darker);
        font-size: 0.9rem;
        font-style: normal;
    }
}

/* Skills Grid */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.skill-card {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    }

    .skill-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin-bottom: 1rem;
        background: var(--primary-blue);
        border-radius: 0.5rem;

        .icon {
            width: 24px;
            height: 24px;
            color: white;
        }
    }

    .skill-title {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
        color: var(--text-white);
    }

    .skill-description {
        color: var(--text-muted);
        line-height: 1.6;
        font-size: 0.95rem;
    }
}

/* Philosophy Grid */

.philosophy-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
}

.philosophy-item {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;

    .philosophy-title {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        color: var(--text-white);

        .icon {
            color: var(--color-green);
            width: 20px;
            height: 20px;
        }
    }

    p {
        color: var(--text-muted);
        line-height: 1.7;
        margin: 0;
    }
}

/* Tech Tags */

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 2rem;
}

.tech-tag {
    padding: 0.5rem 1.25rem;
    background: rgba(86, 105, 189, 0.2);
    border: 1px solid var(--sky-end);
    border-radius: 2rem;
    color: var(--text-white);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(86, 105, 189, 0.4);
        transform: translateY(-2px);
    }
}

/* Connect Section */

.about-cta-text {
    text-align: center;
    font-size: 1.15rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 2rem;
}

.connect-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}

.btn-large {
    padding: 1rem 2rem;
    font-size: 1.1rem;
}

.social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    color: var(--text-white);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: var(--sky-end);
        transform: translateY(-2px);

        .social-icon .icon {
            color: var(--sky-end);
        }
    }

    .social-icon .icon {
        width: 16px;
        height: 16px;
        transition: color 0.2s ease;
    }
}

/* CTA Section */

.about-cta {
    background: linear-gradient(135deg, rgba(21, 38, 113, 0.3), rgba(86, 105, 189, 0.2));
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    padding: 3rem 2rem;
    text-align: center;
}

.cta-description {
    color: var(--text-muted);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border-color);

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: var(--sky-end);
    }
}

/* Buttons */

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;

    &-primary {
        background: var(--primary-blue);
        color: white;

        &:hover {
            background: var(--sky-end);
            transform: translateY(-2px);
        }
    }
}

/* Responsive */

@media (max-width: 1024px) {
    .about-hero {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;

        .about-image {
            order: -1;
        }
    }

    .about-hero-content .about-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .about-container {
        padding: 1.5rem;
    }

    .about-hero-content .about-title {
        font-size: 2rem;
    }

    .about-hero-content .about-subtitle {
        font-size: 1.1rem;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .cta-buttons {
        flex-direction: column;

        .btn {
            width: 100%;
            justify-content: center;
        }
    }

    .connect-actions {
        .btn {
            width: 100%;
            justify-content: center;
        }
    }
}
</style>

<!-- Meta tag to prevent indexing -->
<meta name="robots" content="noindex, nofollow" />
