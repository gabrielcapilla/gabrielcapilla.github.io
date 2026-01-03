# GitHub Pages Script Router

Elegant way to execute remote bash scripts from GitHub repositories without cloning.

## Usage

```bash
# Install using default script (install.sh)
curl -fsSL https://gabrielcapilla.github.io/install | bash -s <repo-name>

# Install specific script
curl -fsSL https://gabrielcapilla.github.io/install | bash -s <repo-name>/<script-file>
```

## Examples

```bash
# Install resolve-lib-patch (uses install.sh if it exists)
curl -fsSL https://gabrielcapilla.github.io/install | bash -s resolve-lib-patch

# Install with specific script
curl -fsSL https://gabrielcapilla.github.io/install | bash -s resolve-lib-patch/patch.sh

# Install with revert flag
curl -fsSL https://gabrielcapilla.github.io/install | bash -s resolve-lib-patch -- --revert
```

## How it Works

The `install` script acts as a router:
1. Receives repository name as parameter
2. Tries to download `install.sh` by default
3. Or downloads the specific script you specify
4. Pipes it to bash for execution

## Adding New Scripts

For automatic installation without specifying script name:

1. **Create an `install.sh` script** in your repository's `main/` branch
2. Push to GitHub
3. Users can install with: `curl .../install | bash -s <repo-name>`

For custom script names, users specify explicitly:
```bash
curl .../install | bash -s <repo-name>/<your-script-name>
```

## Default Script

The router always looks for `install.sh` by default.

**Recommendation:** Name your installation script `install.sh` for the best user experience.

## Architecture

For more details about implementation, see [ARCHITECTURE.md](ARCHITECTURE.md)
