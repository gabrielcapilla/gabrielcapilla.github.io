# Architecture

## Overview

This repository provides an elegant way to execute remote bash scripts from GitHub repositories without requiring users to clone repositories manually.

## Components

### install (Script Router)

The core of system is a bash script that acts as a router:

**Responsibilities:**
- Parse command-line arguments
- Construct URLs to raw.githubusercontent.com
- Download and pipe remote scripts to bash
- Handle errors gracefully
- Provide informative error messages and solutions

**Design Principles:**
- **Single responsibility**: Route to remote scripts
- **No server-side logic**: Pure client-side execution
- **Fail fast**: Validate inputs before making requests
- **User-friendly**: Clear error messages with actionable solutions
- **Simple convention**: One standard default script name

### GitHub Pages

Serves static files and handles Jekyll build process:

**Role:**
- Hosts `install` script
- Provides HTTPS for secure downloads
- Serves static content globally via CDN

**Limitations:**
- Cannot execute server-side code
- Cannot perform HTTP redirects
- Static file serving only

### Jekyll

Minimal Jekyll configuration for GitHub Pages compatibility:

**Purpose:**
- Enable GitHub Pages deployment
- Provide a simple homepage (if needed)
- Handle build automation

**Configuration:**
- Theme: Minima (minimalist, fast)
- No custom collections or plugins needed

## Design Decisions

### Why a Router Script?

**Problem:**
- GitHub Pages cannot perform HTTP redirects
- Direct `curl` to raw.githubusercontent.com URLs are verbose
- Users should not need to remember full URLs

**Solution:**
- A single script that constructs URLs based on patterns
- Short, memorable command: `curl .../install | bash -s <repo>`
- Scripts live in their original repositories

### Why No Duplication?

**Alternative:**
- Copy all scripts to this repository
- Easier to manage in one place

**Chosen Approach:**
- Scripts remain in their repositories
- Single source of truth
- No synchronization needed
- Repository owners maintain their own scripts

### Why Bash?

**Reasons:**
- Universally available on Unix-like systems
- First-class GitHub Actions support
- Pipeable: works seamlessly with `curl | bash`
- Well-understood by target audience (developers)

### Why Single Default Script Name?

**Problems with Multiple Names:**
- **Arbitrary priority**: Why `install.sh` > `setup.sh`? No objective reason
- **Ambiguity**: If multiple scripts exist, which to choose?
- **Hardcoded lists**: Can't cover all possible naming conventions
- **Maintenance**: Adding new names requires updating the router

**Chosen Approach:**
- **Single convention**: Always look for `install.sh`
- **Explicit specification**: If script has different name, user must specify it
- **Clear errors**: Tell user exactly what's wrong and how to fix it

**Benefits:**
- No arbitrary decisions
- No ambiguity
- Simple to understand
- Easy to maintain

## URL Patterns

The router supports two URL patterns:

### Pattern 1: Default Script
```
<repo-name>
```
Resolves to:
```
https://raw.githubusercontent.com/gabrielcapilla/<repo-name>/main/install.sh
```

### Pattern 2: Specific Script
```
<repo-name>/<script-file>
```
Resolves to:
```
https://raw.githubusercontent.com/gabrielcapilla/<repo-name>/<script-file>/main
```

Example: `repo-A/mi-script-custom.sh` → `repo-A/main/mi-script-custom.sh`

## Default Script Convention

The router uses **one standard default script name**:

**`install.sh`**

### Repository Owner Guidelines

For the best user experience, your installation script should be named `install.sh`.

**Rationale:**
- Widely understood convention
- Indicates purpose clearly
- Works with auto-detection in this router

### Alternative Naming

If you use a different script name, users must specify it explicitly:

```bash
curl .../install | bash -s your-repo/custom-name.sh
```

**Examples when not using install.sh:**
- `setup.sh` → User must specify: `your-repo/setup.sh`
- `patch.sh` → User must specify: `your-repo/patch.sh`
- `install` (no .sh) → User must specify: `your-repo/install`

## Error Handling

The router implements clear, actionable error handling:

### 1. Missing Repository Name
Shows usage message and examples.

### 2. Default Script Not Found
When `install.sh` doesn't exist, the router:
- Reports the specific error
- Lists actionable solutions:
  1. Add `install.sh` to repository (recommended)
  2. Specify script name explicitly

### 3. Download/Execution Failure
Reports that download or execution failed with exit code.

### 4. Specific Script Not Found
Reports which script wasn't found.

## Security Considerations

### Current Implementation

Scripts are downloaded and executed directly via pipe:

```bash
curl -fsSL <url> | bash
```

### Trade-offs

**Pros:**
- No intermediate files
- Simple, standard pattern
- Widely understood

**Cons:**
- No verification of script integrity
- User trusts to source implicitly

### Recommendations for Users

1. Review scripts before execution
2. Use HTTPS URLs (enforced by router)
3. Verify repository authenticity
4. Understand what to script does before piping to bash

## Future Enhancements

### Possible Improvements

1. **GPG Verification**: Sign scripts and verify signatures
2. **Checksums**: Compare SHA256 sums before execution
3. **Caching**: Cache downloaded scripts locally
4. **Version Pinning**: Allow specifying script versions (e.g., `repo-name@v1.0`)
5. **Dry Run Mode**: Preview what script will do without executing
6. **Multiple Branches**: Support non-default branches
7. **Preview Mode**: Show script content before execution

### Extension Points

The router script is designed to be extensible:

- Easy to change default script name
- Simple to integrate with verification tools
- Straightforward to add new URL patterns
- Modular error handling

## Performance Characteristics

### Build Time

- Jekyll build: < 1 second
- Static files: Instant serving
- CDN: Global distribution

### Runtime

- Download time: Depends on script size and network
- Execution time: Depends on remote script

## Maintenance

### Adding Support for New Scripts

**For automatic detection:**
1. Create `install.sh` in your repository's `main/` branch
2. Push to GitHub
3. Users can install with: `curl .../install | bash -s <repo-name>`

**For custom names:**
No changes needed in this repository. Users specify the script explicitly.

### Changing Default Script Name

If you want to change the convention from `install.sh` to something else:

1. Edit `DEFAULT_SCRIPT` variable in `install` script
2. Update documentation
3. Commit and push

**Recommendation:** Keep `install.sh` as it's the most widely understood convention.

## Testing

### Manual Testing

```bash
# Test syntax
bash -n install

# Test basic functionality (default script)
echo "resolve-lib-patch" | bash install

# Test with explicit script
echo "resolve-lib-patch/patch.sh" | bash install

# Test error handling
bash install || echo "Expected error"

# Test with extra arguments
echo "resolve-lib-patch -- --help" | bash install
```

### Automated Testing (Future)

Consider adding:
- Shellcheck integration
- Integration tests with sample repositories
- CI/CD pipeline for validation

## Alternatives Considered

### Multiple Default Script Names

**Rejected Reasons:**
- Arbitrary priority ordering
- Ambiguity when multiple exist
- Hardcoded lists can't cover all conventions
- Maintenance burden

**Decision:** Single convention (`install.sh`) with explicit specification for alternatives.

### GitHub API for Script Discovery

**Rejected Reasons:**
- Adds complexity
- Requires authentication for rate-limited requests
- Still arbitrary when multiple scripts exist
- Slower (additional HTTP requests)

**Decision:** Clear error messages guide users to solution.

### GitHub Releases

**Pros:**
- Official GitHub feature
- Versioning support

**Cons:**
- Requires creating releases for each script
- Less flexible than direct file access
- More overhead for simple use cases

### Custom Domain

**Pros:**
- Even shorter URLs
- Full control over redirects

**Cons:**
- Requires domain purchase
- DNS configuration
- Additional infrastructure
- Still limited by GitHub Pages static serving

### Other URL Shorteners

**Pros:**
- Very short URLs

**Cons:**
- External dependency
- Privacy concerns
- No control over uptime
- Each URL needs manual creation
- Not scalable

### Server-Side Redirects

**Pros:**
- True HTTP 301/302 redirects
- Compatible with `curl | sh`

**Cons:**
- Not supported by GitHub Pages
- Requires external hosting
- Violates requirement for free GitHub-based solution

## Naming Conventions

### For Repository Owners

**Recommended:**
- Name your installation script `install.sh`
- Place it in the `main/` branch

**Benefits:**
- Automatic detection works
- Users don't need to remember script name
- Best user experience

**Alternatives:**
If you prefer a different name, users will specify it explicitly. This is perfectly acceptable.

### For Users

- **Simple case:** Just repository name → Uses `install.sh`
- **Custom case:** Repository + script name → Uses specified script

## Conclusion

This architecture prioritizes simplicity and clarity over flexibility. The single convention of `install.sh` eliminates ambiguity, arbitrary decisions, and maintenance burden while providing a straightforward, predictable experience for end users.

## Change Log

### Version 2.0
- Simplified to single default script name (`install.sh`)
- Removed arbitrary multiple-name support
- Improved error messages with actionable solutions
- Clear documentation of convention

### Version 1.0
- Initial implementation
- Multiple default script names (removed in v2.0)
- Basic routing functionality
