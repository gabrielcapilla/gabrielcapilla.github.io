---
layout: page
title: Writing
description: Thoughts, design systems, and developer tooling.
permalink: /writing/
context: hub
back_link: true
---

<div class="articles-list">
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="article-item">
        <span class="article-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        <span class="article-title">{{ post.title }}</span>
        <div class="article-read">
            Read
            {% include components/icon.html name='arrow-right' %}
        </div>
    </a>
    {% endfor %} {% if site.posts.size == 0 %}
    <div
        style="
            padding: 4rem 0;
            text-align: center;
            color: var(--text-muted);
        "
    >
        No articles found.
    </div>
    {% endif %}
</div>
