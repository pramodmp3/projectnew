// navbar.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Fetch the Navbar HTML content
  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      // 2. Inject the HTML into the placeholder
      const navbarContainer = document.getElementById("navbar");
      if (navbarContainer) {
        navbarContainer.innerHTML = data;

        // 3. 🔑 Now that the HTML exists, we can find and attach event listeners
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        if (menuToggle && navLinks) {
          // Listen for the hamburger click
          menuToggle.addEventListener("click", () => {
            // Toggles the 'active' class used by CSS to show/hide the menu
            navLinks.classList.toggle("active");
          });

          // Optional: Logic to close the menu when a link is clicked
          const mobileLinks = navLinks.querySelectorAll(
            "li:not(.has-dropdown) a"
          );
          mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
              // Small delay allows navigation to start before closing
              setTimeout(() => {
                if (navLinks.classList.contains("active")) {
                  navLinks.classList.remove("active");
                }
              }, 300);
            });
          });
        }
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
