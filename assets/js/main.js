document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Code Blocks (Syntax Highlighting & Copy)
  enhanceCodeBlocks();

  // 2. Existing Simple Copy Triggers (for Install section)
  initSimpleCopy();

  // 3. Smooth Scrolling
  initSmoothScroll();
});

/**
 * Enhances .code-block elements:
 * - Parses text content
 * - Applies syntax highlighting (simulated)
 * - Adds line-by-line or block copy functionality
 */
function enhanceCodeBlocks() {
  const blocks = document.querySelectorAll(".code-block");
  const KEYWORDS = ["dotman", "git", "curl", "nimble", "cd"];

  blocks.forEach((block) => {
    // Extract raw text (assuming <pre> structure inside from Markdown/HTML)
    const pre = block.querySelector("pre");
    if (!pre) return;

    const rawText = pre.innerText;
    const lines = rawText.split("\n").filter((line) => line.trim() !== ""); // Remove empty lines for cleaner look

    // Create new structure
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-inner";
    wrapper.title = "Click to copy";

    // Create UI Elements for "Copied" feedback
    const copyIndicator = document.createElement("div");
    copyIndicator.className = "code-copy-indicator";
    copyIndicator.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

    const toast = document.createElement("div");
    toast.className = "code-copied-toast";
    toast.innerHTML = `<svg class="icon" style="width:12px;height:12px;" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied`;

    lines.forEach((lineText, index) => {
      const lineEl = document.createElement("div");
      lineEl.className = "code-line";
      lineEl.dataset.index = index;

      const trimmed = lineText.trim();
      let isComment = trimmed.startsWith("#");
      let commandToCopy = isComment ? null : trimmed.replace(/#.*$/, "").trim(); // Strip inline comments for copy

      if (isComment) {
        lineEl.innerHTML = `<span class="syntax-comment">${lineText}</span>`;
      } else {
        lineEl.classList.add("is-command");
        lineEl.dataset.command = commandToCopy; // Store cleaner command

        // Simple Syntax Highlighting
        const parts = lineText.split(" ");
        const firstWord = parts[0];

        if (KEYWORDS.includes(firstWord)) {
          const args = lineText.substring(firstWord.length);
          lineEl.innerHTML = `<span class="syntax-cmd">${firstWord}</span><span class="syntax-args">${args}</span>`;
        } else {
          lineEl.innerHTML = `<span class="syntax-args">${lineText}</span>`;
        }
      }
      wrapper.appendChild(lineEl);
    });

    // Click Handler
    wrapper.addEventListener("click", (e) => {
      // Check if specific line clicked
      const line = e.target.closest(".code-line");
      let textToCopy = "";

      if (line && line.dataset.command) {
        // Copy specific line
        textToCopy = line.dataset.command;
      } else {
        // Copy all commands in block (filter out comments)
        textToCopy = lines
          .map((l) => l.trim())
          .filter((l) => !l.startsWith("#"))
          .map((l) => l.replace(/#.*$/, "").trim()) // remove inline comments
          .join("\n");
      }

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Show Toast
          toast.classList.add("show");

          // Change icon momentarily
          copyIndicator.innerHTML = `<svg class="icon" style="color:#4ade80;" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

          setTimeout(() => {
            toast.classList.remove("show");
            copyIndicator.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
          }, 2000);
        });
      }
    });

    // Clear old <pre> and append new interactive DOM
    block.innerHTML = "";
    block.appendChild(wrapper);
    block.appendChild(copyIndicator);
    block.appendChild(toast);
  });
}

function initSimpleCopy() {
  const copyTriggers = document.querySelectorAll("[data-copy]");

  // SVGs
  const iconCopy = `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>`;
  const iconCheck = `<polyline points="20 6 9 17 4 12"></polyline>`;

  copyTriggers.forEach((trigger) => {
    trigger.addEventListener("click", async () => {
      const textToCopy = trigger.getAttribute("data-copy");
      const tooltipId = trigger.getAttribute("data-tooltip");
      const tooltip = document.getElementById(tooltipId);

      // Find icon inside trigger (if any)
      const iconSvg = trigger.querySelector("svg.icon");
      let originalIconContent = "";

      if (iconSvg) {
        originalIconContent = iconSvg.innerHTML;
      }

      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);

          // 1. Show Toast
          if (tooltip) {
            tooltip.classList.add("show");
          }

          // 2. Change Icon to Check
          if (iconSvg) {
            iconSvg.innerHTML = iconCheck;
            iconSvg.style.color = "#4ade80"; // Green
          }

          // 3. Reset after delay
          setTimeout(() => {
            if (tooltip) tooltip.classList.remove("show");

            if (iconSvg) {
              iconSvg.innerHTML = originalIconContent;
              iconSvg.style.color = ""; // Reset color
            }
          }, 2000);
        } catch (err) {
          console.error("Failed to copy text", err);
        }
      }
    });
  });
}

function initSmoothScroll() {
  // Select all links that contain a hash
  const links = document.querySelectorAll('a[href*="#"]');

  links.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Check if href is just a placeholder
      if (this.getAttribute("href") === "#") return;

      // Parse URLs to compare properly
      const targetUrl = new URL(this.href);
      const currentUrl = new URL(window.location.href);

      // Check if the link points to the current page (same path and hostname)
      if (
        targetUrl.pathname === currentUrl.pathname &&
        targetUrl.hostname === currentUrl.hostname
      ) {
        // Extract ID without the #
        const targetId = targetUrl.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          // Smooth scroll to element
          targetElement.scrollIntoView({ behavior: "smooth" });

          // Update URL hash without jumping
          history.pushState(null, null, targetUrl.hash);
        }
      }
    });
  });
}
