---
layout: page
title: Contact
description: Get in touch for project questions, collaboration, or feedback.
permalink: /contact/
published: true
---

{% if site.data.settings.contact.form_id %}

<form
    class="form-panel form-stack"
    action="https://formspree.io/f/{{ site.data.settings.contact.form_id }}"
    method="POST"
    id="contact-form"
>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name" />
    </div>

    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="your@email.com" />
    </div>

    <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required placeholder="What's this about?" />
    </div>

    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required placeholder="Your message..."></textarea>
    </div>

    <button type="submit" class="btn-submit">
        Send Message {% include components/icon.html name='arrow-right' %}
    </button>

</form>
{% else %}
<div class="form-panel info-stack">
    <h2 class="section-header">Contact</h2>
    <p class="page-description">Contact details will be available soon.</p>
</div>
{% endif %}
