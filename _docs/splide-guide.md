---
title: Splide.js Integration
slug: splide-guide
project: internal
category: Maintenance
order: 2
sitemap: false
robots: noindex
published: false
---

# Splide.js Integration

## Overview

Splide.js is a lightweight, accessible, and responsive slider/carousel library. It's now integrated into your Jekyll site.

## Installation

### Option 1: CDN (Recommended for simplicity)

Add this to your `<head>` in `_includes/layout/head.html`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
/>
```

Add this before closing `</body>` in `_includes/layout/footer.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
```

### Option 2: Local files

Download Splide from https://splidejs.com/ and place in `assets/js/splide.min.js` and `assets/css/splide.min.css`.

## Basic Usage

### Simple Slider

```html
<div class="splide" id="my-slider">
  <div class="splide__track">
    <div class="splide__list">
      <div class="splide__slide">Slide 1</div>
      <div class="splide__slide">Slide 2</div>
      <div class="splide__slide">Slide 3</div>
    </div>
  </div>
</div>
```

The slider will be automatically initialized with default options.

### Using the Component

```html
{% include components/splide-slider.html id="projects-slider" options="perPage:
3, gap: '2rem'" %}
<div class="splide__slide">
  <!-- Your content here -->
</div>
<div class="splide__slide">
  <!-- More content -->
</div>
{% endinclude %}
```

## Configuration

The default configuration in `main.js` includes:

```javascript
{
  type: "slide",
  perPage: 3,
  gap: "1rem",
  pagination: true,
  arrows: true,
  breakpoints: {
    1024: { perPage: 2 },
    768: { perPage: 1 }
  }
}
```

### Custom Options

You can pass custom options via the `options` parameter:

```html
{% include components/splide-slider.html id="my-slider" options="type: 'loop',
autoplay: true, interval: 3000" %}
<!-- Slides -->
{% endinclude %}
```

## Responsive Breakpoints

- Desktop (>1024px): 3 slides per page
- Tablet (768-1024px): 2 slides per page
- Mobile (<768px): 1 slide per page

## Accessibility

Splide.js includes built-in accessibility features:

- Keyboard navigation
- ARIA attributes
- Screen reader support
- Focus management

## Examples

### Project Cards Slider

```html
<div class="splide" id="projects-slider">
  <div class="splide__track">
    <div class="splide__list">
      {% for project in site.projects %}
      <div class="splide__slide">
        {% include components/project-card.html url=project.url
        title=project.title description=project.description %}
      </div>
      {% endfor %}
    </div>
  </div>
</div>
```

### Auto-scrolling Testimonials

```html
<div class="splide" id="testimonials-slider">
  <div class="splide__track">
    <div class="splide__list">
      <div class="splide__slide">
        <blockquote>Great work!</blockquote>
        <cite>- John Doe</cite>
      </div>
      <div class="splide__slide">
        <blockquote>Amazing experience</blockquote>
        <cite>- Jane Smith</cite>
      </div>
    </div>
  </div>
</div>
```

## Documentation

For complete documentation, visit: https://splidejs.com/
