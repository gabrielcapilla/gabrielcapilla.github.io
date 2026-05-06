---
title: Performance
slug: performance
project: parun
category: Advanced
order: 8
---

## Performance

Parun is written with a data-oriented design. The code separates hot search data from cold display data so filtering stays fast even with large package catalogs.

### Search architecture

The runtime index stores package data in separate sections:

- names and lowercased names for search
- installed flags for filtering
- repository and version data for rendering
- first-byte buckets to narrow candidate scans

Search results are capped internally and score-sorted after filtering.

### Details cache

The details panel uses a small bounded cache. Parun keeps only a limited number of detail payloads in memory and clears the cache when the byte budget is exceeded. Large detail payloads are truncated with a `[truncated]` marker.

Useful limits from the source:

| Limit                     | Value     |
| ------------------------- | --------- |
| Detail entries            | `8`       |
| Detail byte budget        | `128 KiB` |
| Single detail payload cap | `16 KiB`  |

### Performance snapshots

Use `--perf-out=PATH` to write runtime counters on graceful exit:

<div class="code-block"><pre>parun --perf-out=/tmp/parun-perf.json</pre></div>

The snapshot includes hot-path counters such as filter calls, candidate checks, score calls, installed checks, bucket lookups, and cold-path counters for row rendering, detail wrapping, cache hits, and cache misses.

### Portable binaries

For public distribution, use:

<div class="code-block"><pre>nimble releasePortable</pre></div>

That task builds a release binary and fails if `readelf` reports an x86-64-v3 or x86-64-v4 ISA requirement.
