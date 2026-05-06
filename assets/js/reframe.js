/**
 * Reframe.js - Make iframes responsive
 * https://github.com/yowainwright/reframe.js
 *
 * Wrap iframes in a container with a percentage padding-top
 * to maintain aspect ratio.
 */
function initReframe() {
    var reframeTarget = ".post-content iframe, .page__content iframe, .article iframe, .post iframe";
    var reframeElements = document.querySelectorAll(reframeTarget);

    reframeElements.forEach(function(element) {
        // Skip if already framed
        if (element.classList.contains("reframed")) {
            return;
        }

        // Skip if inline style already has percentage
        if (element.style.width && element.style.width.includes("%")) {
            return;
        }

        // Skip if element is marked to skip
        if (element.classList.contains("reframe-off")) {
            return;
        }

        var height = element.getAttribute("height") || element.offsetHeight;
        var width = element.getAttribute("width") || element.offsetWidth;

        if (!height || !width) {
            return;
        }

        var padding = (height / width) * 100;
        var wrapper = document.createElement("div");
        wrapper.className = "reframe-wrapper";
        wrapper.style.position = "relative";
        wrapper.style.width = "100%";
        wrapper.style.paddingTop = padding + "%";

        element.style.position = "absolute";
        element.style.width = "100%";
        element.style.height = "100%";
        element.style.left = "0";
        element.style.top = "0";

        var parent = element.parentNode;
        if (parent) {
            parent.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            element.classList.add("reframed");
        }
    });
}
