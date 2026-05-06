---
layout: page
title: Elements
description: Component showcase and style guide
permalink: /elements/
sitemap: false
robots: noindex
published: true
hidden: true
uses_splide: true
capabilities:
  - copy
  - faq
  - media
  - image-slider
  - splide
  - smooth-scroll
  - reframe
---

<div class="elements-container">
    <header class="elements-header">
        <h1>Components & Elements</h1>
        <p>A comprehensive showcase of all available components</p>
    </header>

    <!-- Headings Section -->
    <section class="element-section">
        <h2>Headings</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Heading Levels</h3>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </div>
            <div class="element-group">
                <h3>Paragraph with Heading</h3>
                <h3>Example Heading</h3>
                <p>
                    This is a paragraph that follows a heading. It demonstrates how headings and paragraphs work together to create a visual hierarchy.
                </p>
            </div>
        </div>
    </section>

    <!-- Buttons Section -->
    <section class="element-section">
        <h2>Buttons</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Primary Button</h3>
                <a href="#" class="btn btn-primary">
                    Primary Button
                </a>
            </div>
            <div class="element-group">
                <h3>Button with Icon</h3>
                <a href="#" class="btn btn-primary">
                    View Projects {% include components/icon.html name='arrow-right' %}
                </a>
            </div>
            <div class="element-group">
                <h3>Disabled Button</h3>
                <a href="#" class="btn btn-disabled">
                    Disabled
                </a>
            </div>
        </div>
    </section>

    <!-- Icons Section -->
    <section class="element-section">
        <h2>Icons</h2>
        <div class="element-showcase">
            <div class="icon-grid">
                <div class="icon-item">
                    {% include components/icon.html name='arrow-right' %}
                    <span>arrow-right</span>
                </div>
                <div class="icon-item">
                    {% include components/icon.html name='arrow-left' %}
                    <span>arrow-left</span>
                </div>
                <div class="icon-item">
                    {% include components/icon.html name='layers' %}
                    <span>layers</span>
                </div>
                <div class="icon-item">
                    {% include components/icon.html name='pen' %}
                    <span>pen</span>
                </div>
                <div class="icon-item">
                    {% include components/icon.html name='book' %}
                    <span>book</span>
                </div>
                <div class="icon-item">
                    {% include components/icon.html name='heart' %}
                    <span>heart</span>
                </div>
                <div class="icon-item">
                    {% include components/icon.html name='package' %}
                    <span>package</span>
                </div>
                <div class="icon-item">
                    {% include components/icon.html name='plus' %}
                    <span>plus</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Project Cards Section -->
    <section class="element-section">
        <h2>Project Cards</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Featured Card</h3>
                {% include components/project-card.html
                  url="#"
                  title="Featured Project"
                  description="This is a featured project card with featured class applied"
                  icon="~"
                  status="Active"
                  class="featured"
                %}
            </div>
            <div class="element-group">
                <h3>Standard Card</h3>
                {% include components/project-card.html
                  url="#"
                  title="Standard Project"
                  description="A standard project card without featured class"
                  icon="~"
                  status="Active"
                %}
            </div>
            <div class="element-group">
                <h3>Placeholder Card</h3>
                <div class="project-card placeholder">
                    <div class="card-content">
                        <div>
                            <div class="card-header">
                                <div class="project-icon">
                                    {% include components/icon.html name='package' %}
                                </div>
                            </div>
                            <h3 class="project-title text-muted">Coming Soon</h3>
                            <p class="project-desc text-muted-darker">
                                A project that hasn't been released yet
                            </p>
                        </div>
                        <div class="card-footer-placeholder">Coming soon</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Code Blocks Section -->
    <section class="element-section">
        <h2>Code Blocks</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Simple Command</h3>
                <div class="code-block">
                    <pre>git clone https://github.com/user/repo.git</pre>
                </div>
            </div>
            <div class="element-group">
                <h3>Multi-line with Comments</h3>
                <div class="code-block">
                    <pre>

# Install dotman

curl -fsSL gabrielcapilla.github.io/install | bash -s dotman

# Initialize dotman

dotman init

# Add configuration files

dotman add ~/.zshrc ~/.vimrc
</pre>
</div>
</div>
</div>
</section>

    <!-- Terminal Section -->
    <section class="element-section">
        <h2>Terminal</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Default Terminal</h3>
                {% include components/terminal.html
                  title="Terminal - Bash"
                  content="echo 'Hello, World!'"
                %}
            </div>
        </div>
    </section>

    <!-- Splide Sliders Section -->
    <section class="element-section">
        <h2>Splide Sliders</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Basic Slider</h3>
                <div class="splide" id="basic-slider">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div class="splide__slide">
                                <div class="slide-content">
                                    <h4>Slide 1</h4>
                                    <p>First slide content</p>
                                </div>
                            </div>
                            <div class="splide__slide">
                                <div class="slide-content">
                                    <h4>Slide 2</h4>
                                    <p>Second slide content</p>
                                </div>
                            </div>
                            <div class="splide__slide">
                                <div class="slide-content">
                                    <h4>Slide 3</h4>
                                    <p>Third slide content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="element-group">
                <h3>Slider with Cards</h3>
                <div class="splide" id="cards-slider-demo">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div class="splide__slide">
                                <div class="project-card featured">
                                    <div class="card-content">
                                        <div>
                                            <div class="card-header">
                                                <div class="project-icon">A</div>
                                                <div class="status-badge">Active</div>
                                            </div>
                                            <h3 class="project-title">Project Alpha</h3>
                                            <p class="project-desc">First project in slider</p>
                                        </div>
                                        <div class="card-footer">View Project</div>
                                    </div>
                                </div>
                            </div>
                            <div class="splide__slide">
                                <div class="project-card featured">
                                    <div class="card-content">
                                        <div>
                                            <div class="card-header">
                                                <div class="project-icon">B</div>
                                                <div class="status-badge">Beta</div>
                                            </div>
                                            <h3 class="project-title">Project Beta</h3>
                                            <p class="project-desc">Second project in slider</p>
                                        </div>
                                        <div class="card-footer">View Project</div>
                                    </div>
                                </div>
                            </div>
                            <div class="splide__slide">
                                <div class="project-card featured">
                                    <div class="card-content">
                                        <div>
                                            <div class="card-header">
                                                <div class="project-icon">C</div>
                                                <div class="status-badge">Active</div>
                                            </div>
                                            <h3 class="project-title">Project Gamma</h3>
                                            <p class="project-desc">Third project in slider</p>
                                        </div>
                                        <div class="card-footer">View Project</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Lists Section -->
    <section class="element-section">
        <h2>Lists</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Unordered List</h3>
                <ul>
                    <li>First item in unordered list</li>
                    <li>Second item in unordered list
                        <ul>
                            <li>Nested item 1</li>
                            <li>Nested item 2</li>
                        </ul>
                    </li>
                    <li>Third item in unordered list</li>
                </ul>
            </div>
            <div class="element-group">
                <h3>Ordered List</h3>
                <ol>
                    <li>First step in the process</li>
                    <li>Second step in the process
                        <ol>
                            <li>Sub-step 2.1</li>
                            <li>Sub-step 2.2</li>
                        </ol>
                    </li>
                    <li>Third step in the process</li>
                </ol>
            </div>
            <div class="element-group">
                <h3>Inline List</h3>
                <ul class="inline-list">
                    <li>Item one</li>
                    <li>Item two</li>
                    <li>Item three</li>
                    <li>Item four</li>
                </ul>
            </div>
            <div class="element-group">
                <h3>Feature List</h3>
                <ul class="feature-list">
                    <li>
                        {% include components/icon.html name='check' %}
                        Feature 1 with icon
                    </li>
                    <li>
                        {% include components/icon.html name='check' %}
                        Feature 2 with icon
                    </li>
                    <li>
                        {% include components/icon.html name='check' %}
                        Feature 3 with icon
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Tables Section -->
    <section class="element-section">
        <h2>Tables</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Default Table</h3>
                <div class="table-container">
                    <table>
                        <caption>Simple data table example</caption>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Developer</td>
                                <td>Active</td>
                                <td>2024-01-15</td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>Designer</td>
                                <td>Active</td>
                                <td>2024-01-20</td>
                            </tr>
                            <tr>
                                <td>Bob Wilson</td>
                                <td>Manager</td>
                                <td>Inactive</td>
                                <td>2024-02-01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="element-group">
                <h3>Striped Table</h3>
                <div class="table-container">
                    <table class="striped">
                        <caption>Striped rows for better readability</caption>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Laptop</td>
                                <td>Electronics</td>
                                <td>$999</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Mouse</td>
                                <td>Accessories</td>
                                <td>$25</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>Keyboard</td>
                                <td>Accessories</td>
                                <td>$75</td>
                                <td>80</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <!-- Quotes Section -->
    <section class="element-section">
        <h2>Quotes</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Default Quote</h3>
                <blockquote>
                    <p>The best way to predict the future is to invent it.</p>
                    <cite>Alan Kay</cite>
                </blockquote>
            </div>
            <div class="element-group">
                <h3>Info Quote</h3>
                <blockquote class="info">
                    <p>Note: This is an informational quote that highlights important details.</p>
                </blockquote>
            </div>
            <div class="element-group">
                <h3>Success Quote</h3>
                <blockquote class="success">
                    <p>Success is not final, failure is not fatal: it is the courage to continue that counts.</p>
                    <cite>Winston Churchill</cite>
                </blockquote>
            </div>
            <div class="element-group">
                <h3>Warning Quote</h3>
                <blockquote class="warning">
                    <p>Warning: Proceed with caution when working with sensitive data.</p>
                </blockquote>
            </div>
        </div>
    </section>

    <!-- Callouts Section -->
    <section class="element-section">
        <h2>Callouts</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Info Callout</h3>
                <div class="callout info">
                    <div class="callout-title">
                        <span class="callout-icon">ℹ️</span>
                        Information
                    </div>
                    <div class="callout-content">
                        <p>This is an informational callout used to provide additional context or details.</p>
                    </div>
                </div>
            </div>
            <div class="element-group">
                <h3>Success Callout</h3>
                <div class="callout success">
                    <div class="callout-title">
                        <span class="callout-icon">✅</span>
                        Success
                    </div>
                    <div class="callout-content">
                        <p>The operation completed successfully. Your changes have been saved.</p>
                    </div>
                </div>
            </div>
            <div class="element-group">
                <h3>Warning Callout</h3>
                <div class="callout warning">
                    <div class="callout-title">
                        <span class="callout-icon">⚠️</span>
                        Warning
                    </div>
                    <div class="callout-content">
                        <p>Please review your changes before proceeding. This action cannot be undone.</p>
                    </div>
                </div>
            </div>
            <div class="element-group">
                <h3>Danger Callout</h3>
                <div class="callout danger">
                    <div class="callout-title">
                        <span class="callout-icon">❌</span>
                        Danger
                    </div>
                    <div class="callout-content">
                        <p>Critical error detected. Please contact support immediately.</p>
                    </div>
                </div>
            </div>
            <div class="element-group">
                <h3>Note Callout</h3>
                <div class="callout note">
                    <div class="callout-title">
                        <span class="callout-icon">📝</span>
                        Note
                    </div>
                    <div class="callout-content">
                        <p>This is a simple note for additional reference or clarification.</p>
                    </div>
                </div>
            </div>
            <div class="element-group">
                <h3>Tip Callout</h3>
                <div class="callout tip">
                    <div class="callout-title">
                        <span class="callout-icon">💡</span>
                        Tip
                    </div>
                    <div class="callout-content">
                        <p>Pro tip: Use keyboard shortcuts to improve your productivity!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Images Section -->
    <section class="element-section">
        <h2>Images</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>Lazy Load Image</h3>
                <p>A regular image with lazy loading enabled:</p>
                <div class="text-center my-4">
                    <img
                        src="https://via.placeholder.com/600x300/3b82f6/ffffff?text=Lazy+Load+Image"
                        alt="Lazy load placeholder image"
                        loading="lazy"
                        decoding="async"
                        class="img-responsive rounded-lg"
                    >
                </div>
            </div>
        </div>
    </section>

    <!-- Video Embeds Section -->
    <section class="element-section">
        <h2>Video Embeds</h2>
        <div class="element-showcase">
            <div class="element-group">
                <h3>YouTube Embed</h3>
                <p>Standard YouTube video embed:</p>
                <div class="mt-4">
                    {% include components/youtube.html
                      id="dQw4w9WgXcQ"
                      title="Rick Astley - Never Gonna Give You Up"
                      width="100%"
                      height="400px"
                    %}
                </div>
            </div>
            <div class="element-group">
                <h3>YouTube Embed with Aspect Ratio</h3>
                <p>YouTube video with 16:9 aspect ratio:</p>
                <div class="mt-4">
                    {% include components/youtube.html
                      id="dQw4w9WgXcQ"
                      title="Rick Astley - Never Gonna Give You Up"
                      class="aspect-ratio"
                    %}
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="element-section">
        <h2>FAQ Section</h2>
        <div class="element-showcase">
            <div class="element-group full-width">
                <h3>Interactive FAQ Accordion</h3>
                <p>Click on each question to expand the answer:</p>
                <div class="faq">
                    <div class="faq__item" tabindex="0" data-name="closed">
                        <h3 class="faq__title">
                            What is Jekyll?
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
                                <path fill="var(--text-white)" d="M8.654 1.168a1.153 1.153 0 1 0-2.308 0V6.36H1.154a1.153 1.153 0 1 0 0 2.308h5.192v5.192a1.153 1.153 0 1 0 2.308 0V8.668h5.192c.638 0 1.154-.516 1.154-1.154 0-.639-.516-1.154-1.154-1.154H8.654V1.168Z"/>
                            </svg>
                        </h3>
                        <div class="faq__description">
                            <p>Jekyll is a static site generator built with Ruby. It transforms plain text into static websites and blogs, making it perfect for GitHub Pages hosting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="element-section">
        <h2>Gallery Section</h2>
        <div class="element-showcase">
            <div class="element-group full-width">
                <h3>Image Gallery with Zoom</h3>
                <p>Click on any image to zoom:</p>
                <div class="section-gallery__inner mt-6">
                    <div class="section-gallery__image">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop" alt="Coding Setup" loading="lazy" decoding="async">
                    </div>
                    <div class="section-gallery__image">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop" alt="Team Collaboration" loading="lazy" decoding="async">
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<!-- Gallery Overlay for Zoom -->
<div class="gallery-overlay"></div>
