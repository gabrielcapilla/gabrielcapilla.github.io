# LLM Maintenance Guide

Use this file first when maintaining or optimizing this Jekyll site. It lists the local tools and repeatable workflows so agents do not guess.

## Site Stack

- Jekyll static site.
- Ruby build command: `bundle exec jekyll build`.
- Sass entrypoint: `assets/css/styles.scss`.
- Generated output: `_site/`.
- Do not edit `_site/` directly.

## Build And Optimization Tools

Use the Node scripts in `package.json`:

- `npm run build:site`
  - Runs `bundle exec jekyll build`.
  - Runs `scripts/optimize-assets.mjs`.
  - Produces optimized `_site/`.
- `npm run optimize:assets`
  - Purges generated CSS against `_site` HTML and JS.
  - Minifies generated local JS.
  - Does not mutate source Sass or source JS.
- `npm run serve:site`
  - Serves optimized `_site` on port `4010`.
- `CHROME_PATH=/usr/bin/helium-browser npm run benchmark:lighthouse`
  - Runs standardized Lighthouse benchmarks through Helium.
  - Writes JSON reports to `reports/lighthouse/`.

## Benchmark Contract

Benchmark optimized `_site`, not raw Jekyll dev output.

Standard sequence:

```bash
npm run build:site
npm run serve:site
CHROME_PATH=/usr/bin/helium-browser npm run benchmark:lighthouse
```

Representative URLs are defined in `scripts/run-lighthouse.mjs`:

- `/`
- `/projects/dotman/`
- `/projects/parun/`
- `/projects/dotman/docs/`
- `/projects/parun/docs/`
- `/writing/`

Target gates:

- Performance: `>= 95`
- Accessibility: `>= 90`
- Best Practices: `>= 95`
- SEO: `100`
- LCP: `<= 2.5s`
- CLS: `<= 0.1`
- TBT: `<= 100ms`

## SEO And Positioning

Use `jekyll-seo-tag`, `jekyll-sitemap`, and `jekyll-feed` already configured in `_config.yml`.

Project pages use:

- SEO title in `title`, e.g. `dotman - Linux dotfiles manager`.
- Short UI label in `display_title`.
- `description`.
- `image.path` and `image.alt`.
- `seo.type: SoftwareApplication`.
- `seo.links` pointing to the repository.

Docs pages use:

- Project-specific titles, e.g. `dotman documentation`.
- Project/task-specific descriptions.
- `seo.type: TechArticle`.
- No duplicate generic redirects from multiple project docs pages.

Hidden/demo pages should use:

```yaml
sitemap: false
robots: noindex
```

## Accessibility Checklist

Run Lighthouse accessibility after UI changes.

Common failure classes in this site:

- Icon-only links need `aria-label`.
- Footer section labels should not skip heading levels.
- `--text-muted-darker` must keep WCAG AA contrast on `--bg-dark`.
- Small uppercase section headers need enough contrast.
- External links should include `rel="noopener"` when `target="_blank"`.

## Skills

Relevant Codex skills installed for this site:

- `/home/human/.agents/skills/jekyll-designer-skill`
  - Design-system normalization, Liquid safety, module maps.
- `/home/human/.agents/skills/jekyll-seo-benchmark-skill`
  - SEO positioning, schema, sitemap/canonical policy, and empirical benchmarks.

Load those skills when tasks involve design normalization, SEO, PageSpeed, Lighthouse, writing/project/docs positioning, or Jekyll performance.
