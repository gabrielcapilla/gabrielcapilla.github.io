---
layout: page
title: Tags
permalink: /tags/
sitemap: false
robots: noindex
published: true
hidden: false
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tag_words = site_tags | split:',' | sort %}

<!-- begin tag page -->
<section class="tag-page">

    <div class="tag-header">
        <h1>Browse by Tag</h1>
        <p>Find content organized by topics and categories</p>
    </div>

    <div class="tags-nav">
        {% for item in (0..site.tags.size) %}{% unless forloop.last %}
            {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
            <a href="#{{ this_word | downcase | url_decode }}" class="tag-nav-item">{{ this_word }}</a>
        {% endunless %}
        {% endfor %}
    </div>

    {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}

    <div class="tag-section is-hidden" id="{{ this_word | downcase | url_decode }}">
        <div class="tag-section-header">
            <h2 class="tag-section-title">{{ this_word }}</h2>
            <em class="tag-section-counter">{{ site.tags[this_word].size }} {% if site.tags[this_word].size < 2 %}Post{% else %}Posts{% endif %}</em>
        </div>

        <div class="tag-posts">
            {% for post in site.tags[this_word] %}
                {% if post.title != null %}
                    <div class="tag-post-item">
                        <div class="tag-post-content">
                            <h3 class="tag-post-title">
                                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                            </h3>
                            <div class="tag-post-meta">
                                <time class="tag-post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                                {% if post.description %}
                                    <p class="tag-post-description">{{ post.description }}</p>
                                {% endif %}
                            </div>
                        </div>
                        <div class="tag-post-arrow">
                            {% include components/icon.html name='arrow-right' %}
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>

    {% endunless %}
    {% endfor %}

</section>
<!-- end tag page -->

<script>
    (function() {
        // Get tag from URL parameter
        var params = new URLSearchParams(window.location.search);
        var tagName = params.get('tag');

        if (tagName) {
            var el = document.getElementById(tagName);
            if (el) {
                el.classList.remove('is-hidden');
                // Smooth scroll to section
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // Show first tag section by default
            var firstSection = document.querySelector('.tag-section');
            if (firstSection) {
                firstSection.classList.remove('is-hidden');
            }
        }
    })();
</script>

<style>
    /* Tags Page Styles */
    .tag-page {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
    }

    .tag-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .tag-header h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: var(--text-white);
    }

    .tag-header p {
        color: var(--text-muted);
        font-size: 1.1rem;
    }

    .tags-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-color);
    }

    .tag-nav-item {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border-color);
        border-radius: 2rem;
        color: var(--text-muted);
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.2s ease;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-white);
            border-color: var(--sky-end);
        }
    }

    .tag-section {
        margin-bottom: 4rem;

        &.is-hidden {
            display: none;
        }
    }

    .tag-section-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--border-color);
    }

    .tag-section-title {
        font-size: 2rem;
        color: var(--text-white);
        margin: 0;
    }

    .tag-section-counter {
        font-size: 1rem;
        color: var(--text-muted-darker);
    }

    .tag-posts {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .tag-post-item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: var(--sky-end);
            transform: translateX(4px);
        }
    }

    .tag-post-content {
        flex: 1;
    }

    .tag-post-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
    }

    .tag-post-title a {
        color: var(--text-white);
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: var(--sky-end);
        }
    }

    .tag-post-meta {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .tag-post-date {
        font-size: 0.875rem;
        color: var(--text-muted-darker);
        font-family: var(--font-mono);
    }

    .tag-post-description {
        font-size: 0.95rem;
        color: var(--text-muted);
        margin: 0;
    }

    .tag-post-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 50%;
        color: var(--sky-end);
        transition: all 0.2s ease;

        .icon {
            width: 1rem;
            height: 1rem;
        }

        .tag-post-item:hover & {
            background: var(--sky-end);
            color: white;
        }
    }

    /* Responsive */
    @media (max-width: 768px) {
        .tag-page {
            padding: 1.5rem;
        }

        .tag-header h1 {
            font-size: 2rem;
        }

        .tag-header p {
            font-size: 1rem;
        }

        .tag-section-header {
            flex-direction: column;
            gap: 0.5rem;
        }

        .tag-section-title {
            font-size: 1.5rem;
        }

        .tag-post-item {
            padding: 1.25rem;
            gap: 1rem;
        }

        .tag-post-title {
            font-size: 1.1rem;
        }
    }
</style>
