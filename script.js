**script.js**
```javascript
// Add hover and animation effects dynamically
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.4)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
        });
    });

    // Add fade-in animation to all containers
    const containers = document.querySelectorAll(".container");
    containers.forEach(container => {
        container.classList.add("fade-in");
    });
});
