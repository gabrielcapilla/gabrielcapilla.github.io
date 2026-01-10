---
title: Link States
slug: link-states
category: Core Concepts
order: 5
---

## Link States

The `status` command shows the state of each file in your profiles:

<div style="margin-bottom: 2rem;">
    <div class="status-item">
        <div class="status-dot bg-green"></div>
        <p style="margin: 0; color: var(--text-muted);"><strong style="color: white;">Linked</strong> - The file is properly symlinked from the profile to the system</p>
    </div>
    <div class="status-item">
        <div class="status-dot bg-yellow"></div>
        <p style="margin: 0; color: var(--text-muted);"><strong style="color: white;">NotLinked</strong> - The file exists in the profile but is not symlinked</p>
    </div>
    <div class="status-item">
        <div class="status-dot bg-red"></div>
        <p style="margin: 0; color: var(--text-muted);"><strong style="color: white;">Conflict</strong> - A file exists at the target location but is not managed by dotman</p>
    </div>
    <div class="status-item">
        <div class="status-dot bg-purple"></div>
        <p style="margin: 0; color: var(--text-muted);"><strong style="color: white;">OtherProfile</strong> - The file is linked to another profile</p>
    </div>
</div>
