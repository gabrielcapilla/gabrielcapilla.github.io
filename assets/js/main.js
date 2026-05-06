document.addEventListener("DOMContentLoaded", () => {
  const capabilities = getPageCapabilities();

  runWhenCapable(capabilities, "splide", initSplideSliders);
  runWhenCapable(capabilities, "faq", initFAQ);
  runWhenCapable(capabilities, "media", initGalleryZoom);
  runWhenCapable(capabilities, "image-slider", initImageSliders);
  runWhenCapable(capabilities, "copy", enhanceCodeBlocks);
  runWhenCapable(capabilities, "copy", initSimpleCopy);
  runWhenCapable(capabilities, "hero-tilt", initProjectHeroTilt);
  runWhenCapable(capabilities, "reveal", initProjectReveals);
  runWhenCapable(capabilities, "smooth-scroll", initSmoothScroll);
  runWhenCapable(capabilities, "reframe", initReframe);
});

function getPageCapabilities() {
  return new Set(
    (document.body.dataset.capabilities || "")
      .split(",")
      .map((capability) => capability.trim())
      .filter(Boolean),
  );
}

function runWhenCapable(capabilities, capability, init) {
  if (!capabilities.has(capability)) return;
  init();
}

/**
 * Enhances .code-block elements:
 * - Parses text content
 * - Applies syntax highlighting (simulated)
 * - Adds line-by-line or block copy functionality
 */
function enhanceCodeBlocks() {
  const blocks = document.querySelectorAll(".code-block");
  const keywords = [
    "bundle",
    "cd",
    "chmod",
    "curl",
    "dotman",
    "export",
    "git",
    "jekyll",
    "mkdir",
    "nimble",
    "parun",
    "rm",
    "sh",
  ];
  const copyIcon = `<svg class="icon" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
  const checkIcon = `<svg class="icon icon-success" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const escapeHtml = (value) =>
    value.replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        })[char],
    );
  const inferShell = (lines) =>
    lines.some((line) =>
      /^(#|[A-Z][A-Z0-9_]*=|bundle|cd|chmod|curl|dotman|export|git|jekyll|mkdir|nimble|parun|rm|sh)\b/.test(
        line.trim(),
      ),
    );
  const highlightShell = (lineText) => {
    const indent = lineText.match(/^\s*/)?.[0] || "";
    const trimmed = lineText.trim();
    const commentIndex = trimmed.search(/\s#/);
    const commandPart =
      commentIndex === -1 ? trimmed : trimmed.slice(0, commentIndex);
    const commentPart = commentIndex === -1 ? "" : trimmed.slice(commentIndex);
    const [command = "", ...args] = commandPart.split(/\s+/);
    const argText = args.join(" ");
    const highlightedArgs = escapeHtml(argText)
      .replace(/\b(--?[\w-]+)/g, '<span class="syntax-flag">$1</span>')
      .replace(/\b([A-Z][A-Z0-9_]+)=/g, '<span class="syntax-var">$1</span>=')
      .replace(
        /(&quot;.*?&quot;|&apos;.*?&apos;)/g,
        '<span class="syntax-string">$1</span>',
      );
    const highlightedComment = commentPart
      ? ` <span class="syntax-comment">${escapeHtml(commentPart.trim())}</span>`
      : "";

    return [
      escapeHtml(indent),
      `<span class="syntax-cmd">${escapeHtml(command)}</span>`,
      argText ? `<span class="syntax-args"> ${highlightedArgs}</span>` : "",
      highlightedComment,
    ].join("");
  };

  blocks.forEach((block) => {
    const pre = block.querySelector("pre");
    if (!pre) return;

    const rawText = pre.innerText;
    const lines = rawText.split("\n").filter((line) => line.trim() !== "");
    const isShell = inferShell(lines);

    block.dataset.language = isShell ? "bash" : "text";
    block.classList.add(isShell ? "language-bash" : "language-text");

    const wrapper = document.createElement("div");
    wrapper.className = "code-block-inner";
    wrapper.dataset.language = isShell ? "bash" : "text";
    wrapper.title = "Click to copy";

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "code-copy-button";
    copyButton.innerHTML = `${copyIcon}<span>Copy</span>`;

    const toast = document.createElement("div");
    toast.className = "code-copied-toast";
    toast.innerHTML = `<svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied`;

    lines.forEach((lineText, index) => {
      const lineEl = document.createElement("div");
      const trimmed = lineText.trim();
      const isComment = trimmed.startsWith("#");

      lineEl.className = "code-line";
      lineEl.dataset.index = index;

      if (isComment) {
        lineEl.innerHTML = `<span class="syntax-comment">${escapeHtml(lineText)}</span>`;
      } else {
        const commandToCopy = trimmed.replace(/\s#.*$/, "").trim();
        const firstWord = trimmed.split(/\s+/)[0];

        if (isShell) {
          lineEl.classList.add("is-command");
          lineEl.dataset.command = commandToCopy;
        }

        if (isShell && keywords.includes(firstWord)) {
          lineEl.innerHTML = highlightShell(lineText);
        } else {
          lineEl.innerHTML = `<span class="syntax-args">${escapeHtml(lineText)}</span>`;
        }
      }

      wrapper.appendChild(lineEl);
    });

    wrapper.addEventListener("click", (event) => {
      const line = event.target.closest(".code-line");
      const textToCopy =
        line && line.dataset.command
          ? line.dataset.command
          : lines
              .map((lineText) => lineText.trim())
              .filter((lineText) => !lineText.startsWith("#"))
              .map((lineText) => lineText.replace(/\s#.*$/, "").trim())
              .join("\n");

      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 2000);
      });
    });

    copyButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const textToCopy = lines
        .map((lineText) => lineText.trim())
        .filter((lineText) => !lineText.startsWith("#"))
        .map((lineText) => lineText.replace(/\s#.*$/, "").trim())
        .join("\n");

      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        copyButton.innerHTML = `${checkIcon}<span>Copied</span>`;

        setTimeout(() => {
          copyButton.innerHTML = `${copyIcon}<span>Copy</span>`;
        }, 2000);
      });
    });

    block.innerHTML = "";
    block.appendChild(wrapper);
    block.appendChild(copyButton);
    block.appendChild(toast);
  });

  document.querySelectorAll(".post-content .highlight").forEach((block) => {
    if (block.querySelector(".code-copy-button")) return;

    const code = block.querySelector("code");
    if (!code) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy-button";
    button.innerHTML = `${copyIcon}<span>Copy</span>`;

    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(code.innerText.trimEnd());
      button.innerHTML = `${checkIcon}<span>Copied</span>`;

      setTimeout(() => {
        button.innerHTML = `${copyIcon}<span>Copy</span>`;
      }, 2000);
    });

    block.appendChild(button);
  });
}

/**
 * Initialize FAQ Accordion
 * Handles toggle functionality for FAQ items
 */
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isOpen = item.getAttribute("data-name") === "open";

      // Close all
      faqItems.forEach((i) => i.setAttribute("data-name", "closed"));

      // Open clicked if was closed
      if (!isOpen) {
        item.setAttribute("data-name", "open");
      }
    });

    // Keyboard support
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
  });
}

/**
 * Initialize Gallery Zoom
 * Creates overlay for zoomed images
 */
function initGalleryZoom() {
  const galleryImages = document.querySelectorAll(
    ".section-gallery__image img, .post-content img",
  );
  let overlay = document.querySelector(".gallery-overlay");

  if (!galleryImages.length) return;

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "gallery-overlay";
    document.body.appendChild(overlay);
  }

  galleryImages.forEach((img) => {
    // Skip if image is wrapped in a link
    if (img.closest("a")) {
      return;
    }

    img.addEventListener("click", () => {
      overlay.classList.add("active");

      // Clear previous content
      while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
      }

      // Add image to overlay
      const zoomedImg = document.createElement("img");
      zoomedImg.src = img.currentSrc || img.src;
      zoomedImg.alt = img.alt;
      overlay.appendChild(zoomedImg);
    });
  });

  // Close overlay on click
  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");

    // Clear content after animation
    setTimeout(() => {
      while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
      }
    }, 300);
  });

  // Close overlay on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      overlay.click();
    }
  });
}

function initImageSliders() {
  const sliders = document.querySelectorAll(
    ".post-content .image-slide, .post-content .image-slider",
  );

  sliders.forEach((slider) => {
    if (slider.parentElement?.classList.contains("image-slider-frame")) return;

    const frame = document.createElement("div");
    frame.className = "image-slider-frame";

    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "image-slider-arrow image-slider-arrow--prev";
    prev.setAttribute("aria-label", "Previous image");
    prev.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;

    const next = document.createElement("button");
    next.type = "button";
    next.className = "image-slider-arrow image-slider-arrow--next";
    next.setAttribute("aria-label", "Next image");
    next.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;

    slider.parentNode.insertBefore(frame, slider);
    frame.appendChild(slider);
    frame.appendChild(prev);
    frame.appendChild(next);

    const scrollBySlide = (direction) => {
      const firstImage = slider.querySelector("img");
      const distance = firstImage
        ? firstImage.getBoundingClientRect().width + 16
        : slider.clientWidth * 0.8;

      slider.scrollBy({ left: direction * distance, behavior: "smooth" });
    };

    prev.addEventListener("click", () => scrollBySlide(-1));
    next.addEventListener("click", () => scrollBySlide(1));
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
            iconSvg.classList.add("icon-success");
          }

          // 3. Reset after delay
          setTimeout(() => {
            if (tooltip) tooltip.classList.remove("show");

            if (iconSvg) {
              iconSvg.innerHTML = originalIconContent;
              iconSvg.classList.remove("icon-success");
            }
          }, 2000);
        } catch (err) {
          console.error("Failed to copy text", err);
        }
      }
    });
  });
}

function initProjectHeroTilt() {
  const images = document.querySelectorAll(".project-hero-image");

  if (!images.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) return;

  images.forEach((image) => {
    const maxTilt = 8;

    image.addEventListener("pointermove", (event) => {
      const rect = image.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      image.style.setProperty("--hero-tilt-x", `${-y * maxTilt}deg`);
      image.style.setProperty("--hero-tilt-y", `${x * maxTilt}deg`);
    });

    image.addEventListener("pointerleave", () => {
      image.style.setProperty("--hero-tilt-x", "0deg");
      image.style.setProperty("--hero-tilt-y", "0deg");
    });
  });
}

function initProjectReveals() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (!revealItems.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    },
  );

  revealItems.forEach((item, index) => {
    const delay = Math.min(Number(item.dataset.revealDelay || index * 35), 180);
    item.style.setProperty("--reveal-delay", `${delay}ms`);
    observer.observe(item);
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

      // Check if link points to current page (same path and hostname)
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

/**
 * Initialize Splide Sliders
 * Automatically finds all .splide elements and initializes them
 */
function initSplideSliders() {
  // Check if Splide is available
  if (typeof Splide === "undefined") {
    console.warn(
      "Splide.js not loaded. Include the library to enable sliders.",
    );
    return;
  }

  // Find all splide elements
  const sliders = document.querySelectorAll(".splide");

  sliders.forEach((slider) => {
    // Default configuration
    const defaultOptions = {
      type: "slide",
      perPage: 3,
      gap: "1rem",
      pagination: true,
      arrows: true,
      breakpoints: {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    };

    // Create slider instance
    new Splide(slider, defaultOptions).mount();
  });
}
