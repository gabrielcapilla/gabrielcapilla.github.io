---
title: Profiles
slug: profiles
category: Core Concepts
order: 6
---

## Profiles

Profiles allow you to manage different configurations for different environments (e.g., experimental, laptop, main). The main profile is created by default and cannot be deleted.

<div class="code-block"><pre># Create a new profile
dotman make experimental

# Clone an existing profile

dotman clone main laptop

# List all profiles

dotman list

# Delete a profile (main cannot be deleted)

dotman --delete-profile experimental</pre></div>
