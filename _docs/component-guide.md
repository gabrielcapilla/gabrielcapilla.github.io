---
title: Component Usage Guide
slug: component-guide
project: internal
category: Maintenance
order: 1
sitemap: false
robots: noindex
published: false
---

# Component Usage Guide

This guide provides examples and best practices for using the components available in this Jekyll site.

## Table of Contents

1. [Image Component](#image-component)
2. [Splide Slider Component](#splide-slider-component)
3. [Icon Component](#icon-component)
4. [Project Card Component](#project-card-component)
5. [Code Block Component](#code-block-component)
6. [Back Link Component](#back-link-component)
7. [Terminal Component](#terminal-component)

---

## Image Component

### Basic Usage

```html
{% raw %}{% include components/image.html src="/assets/images/example.jpg"
alt="Description of the image" width="800" height="600" %}{% endraw %}
```

### Without Dimensions (Use carefully - may cause CLS)

```html
{% raw %}{% include components/image.html src="/assets/images/example.jpg"
alt="Description of the image" %}{% endraw %}
```

### With Custom Class

```html
{% raw %}{% include components/image.html src="/assets/images/example.jpg"
alt="Description of the image" width="800" height="600" class="img-responsive
rounded" %}{% endraw %}
```

### Features

- ✅ Native lazy loading (`loading="lazy"`)
- ✅ Async decoding (`decoding="async"`)
- ✅ Fade-in animation when loaded
- ✅ Helps prevent CLS (Cumulative Layout Shift)
- ⚠️ Always provide `width` and `height` for best performance

---

## Splide Slider Component

### Basic Slider

```html
<div class="splide" id="my-slider">
  <div class="splide__track">
    <div class="splide__list">
      <div class="splide__slide">Slide 1 content</div>
      <div class="splide__slide">Slide 2 content</div>
      <div class="splide__slide">Slide 3 content</div>
    </div>
  </div>
</div>
```

### Slider with Project Cards

```html
<div class="splide" id="projects-slider">
  <div class="splide__track">
    <div class="splide__list">
      {% raw %}{% for project in site.projects limit:3 %}
      <div class="splide__slide">
        {% include components/project-card.html url=project.url
        title=project.title description=project.description status="Active"
        icon="~" %}
      </div>
      {% endfor %}{% endraw %}
    </div>
  </div>
</div>
```

### Auto-Scrolling Slider (Custom Configuration)

```html
<div class="splide" id="auto-slider">
  <div class="splide__track">
    <div class="splide__list">
      <div class="splide__slide">Content 1</div>
      <div class="splide__slide">Content 2</div>
    </div>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    new Splide("#auto-slider", {
      type: "loop",
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
    }).mount();
  });
</script>
```

### Default Options

All sliders are automatically initialized with these options:

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

### Features

- ✅ Fully responsive
- ✅ Keyboard navigation
- ✅ Touch/swipe support
- ✅ ARIA accessibility
- ✅ Auto-initialized (no need for custom JS unless you want custom options)

---

## Icon Component

### Basic Usage

```html
{% raw %}{% include components/icon.html name='arrow-right' %}{% endraw %}
```

### Available Icons

Common icons include:

- `arrow-right` - Right arrow
- `arrow-left` - Left arrow
- `layers` - Stack/layers
- `pen` - Pen/writing
- `github` - GitHub logo
- `book` - Documentation/book
- `heart` - Heart/love
- `package` - Package/box
- `plus` - Plus/add
- `minus` - Minus/remove

### Icon in Button

```html
<a href="/projects/" class="btn">
  View Projects {% raw %}{% include components/icon.html name='arrow-right' %}{%
  endraw %}
</a>
```

### Icon in List

```html
<ul>
  <li>
    {% raw %}{% include components/icon.html name='check' %}{% endraw %} Feature
    1
  </li>
  <li>
    {% raw %}{% include components/icon.html name='check' %}{% endraw %} Feature
    2
  </li>
</ul>
```

---

## Project Card Component

### Basic Card

```html
{% raw %}{% include components/project-card.html url="/projects/my-project/"
title="My Project" description="A brief description of the project" icon="~"
status="Active" %}{% endraw %}
```

### Featured Card

```html
{% raw %}{% include components/project-card.html url="/projects/my-project/"
title="My Project" description="A brief description of the project" icon="~"
status="Active" class="featured" %}{% endraw %}
```

### Card from Collection

```html
{% raw %}{% for project in site.projects %} {% include
components/project-card.html url=project.url title=project.title
description=project.description status=project.status icon=project.icon %} {%
endfor %}{% endraw %}
```

### Required Parameters

- `url` - Link destination
- `title` - Project name
- `description` - Brief description

### Optional Parameters

- `icon` - Icon or symbol to display (default: `~`)
- `status` - Status badge text (default: `Active`)
- `class` - Additional CSS classes

---

## Code Block Component

### Basic Code Block

```html
<div class="code-block">
  <pre>git clone https://github.com/user/repo.git</pre>
</div>
```

### Multi-line Code Block

```html
<div class="code-block">
  <pre>
# Install dotman
curl -fsSL gabrielcapilla.github.io/install | bash -s dotman

# Initialize dotman
dotman init
    </pre
  >
</div>
```

### Code Block with Comments

Comments are styled differently:

```html
<div class="code-block">
  <pre>
# This is a comment
git clone https://github.com/user/repo.git

# Install dependencies
npm install
    </pre
  >
</div>
```

### Features

- ✅ Syntax highlighting (simulated)
- ✅ Copy to clipboard on click
- ✅ Individual line copying
- ✅ Visual feedback when copied
- ✅ Comment detection and styling
- ✅ Command keyword highlighting

### Supported Keywords

The following keywords are automatically highlighted:

- `dotman`
- `git`
- `curl`
- `nimble`
- `cd`

---

## Back Link Component

### Basic Usage

```html
{% raw %}{% include components/back-link.html url="/projects/" text="Back to
Projects" %}{% endraw %}
```

### Default Behavior

```html
{% raw %}{% include components/back-link.html %}{% endraw %}
```

Automatically goes back to the parent section with "Back" text.

---

## Terminal Component

### Basic Terminal Window

```html
{% raw %}{% include components/terminal.html title="Terminal" %}{% endraw %}
```

### Terminal with Custom Title

```html
{% raw %}{% include components/terminal.html title="Bash - ~/projects" %}{%
endraw %}
```

### Terminal with Content

```html
{% raw %}{% include components/terminal.html title="Terminal - Bash"
content="npm install && npm start" %}{% endraw %}
```

---

## Best Practices

### Performance

1. **Always use lazy loading** for images below the fold
2. **Provide dimensions** for all images to prevent CLS
3. **Use WebP format** for images when possible
4. **Limit slider items** to 3-5 for best performance

### Accessibility

1. **Alt text** is required for all images
2. **Semantic HTML** should be used when possible
3. **Keyboard navigation** is automatically supported by sliders
4. **Focus states** are built into all interactive components

### Responsive Design

1. **Sliders automatically adjust** to screen size (3→2→1)
2. **Images should be responsive** (use max-width: 100%)
3. **Test on multiple devices** before deploying

---

## Need Help?

For more information, check:

- [Splide.js Documentation](https://splidejs.com/)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Site-specific guides](/docs/)
