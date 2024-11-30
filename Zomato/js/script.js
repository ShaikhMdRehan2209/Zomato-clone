document.addEventListener("DOMContentLoaded", () => {
    // Highlight active link on hover
    const menuLinks = document.querySelectorAll("header ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff9e00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });

    // Placeholder animation for search input
    const searchInput = document.querySelector("main input");
    const placeholderTexts = [
        "Search for restaurant...",
        "Search for cuisine...",
        "Search for a dish..."
    ];
    let placeholderIndex = 0;

    setInterval(() => {
        searchInput.placeholder = placeholderTexts[placeholderIndex];
        placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
    }, 2000);

    // Scroll animation for footer
    const footer = document.querySelector("footer");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            footer.style.opacity = "1";
            footer.style.transition = "opacity 0.5s ease";
        } else {
            footer.style.opacity = "0.7";
        }
    });
});
