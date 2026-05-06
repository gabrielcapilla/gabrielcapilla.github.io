---
title: Link States
slug: link-states
project: dotman
category: Core Concepts
order: 5
---

## Link States

The `status` command shows the state of each file in your profiles:

<div class="status-list">
    <div class="status-item">
        <div class="status-dot bg-green"></div>
        <p><strong>Linked</strong> - The file is properly symlinked from the profile to the system</p>
    </div>
    <div class="status-item">
        <div class="status-dot bg-yellow"></div>
        <p><strong>NotLinked</strong> - The file exists in the profile but is not symlinked</p>
    </div>
    <div class="status-item">
        <div class="status-dot bg-red"></div>
        <p><strong>Conflict</strong> - A file exists at the target location but is not managed by dotman</p>
    </div>
    <div class="status-item">
        <div class="status-dot bg-purple"></div>
        <p><strong>OtherProfile</strong> - The file is linked to another profile</p>
    </div>
</div>
