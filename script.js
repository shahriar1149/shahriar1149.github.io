// Run JavaScript only after the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the interactive buttons and hidden content areas
  const contactButton = document.getElementById("contactButton");
  const contactDetails = document.getElementById("contactDetails");
  const storyToggle = document.getElementById("storyToggle");
  const storyDetails = document.getElementById("storyDetails");
  const educationToggle = document.getElementById("educationToggle");
  const educationDetails = document.getElementById("educationDetails");
  const researchToggle = document.getElementById("researchToggle");
  const researchDetails = document.getElementById("researchDetails");
  const leadershipToggle = document.getElementById("leadershipToggle");
  const leadershipDetails = document.getElementById("leadershipDetails");
  const revealItems = document.querySelectorAll(".reveal");

  // Show or hide the contact details panel
  contactButton.addEventListener("click", function () {
    const isOpen = contactButton.getAttribute("aria-expanded") === "true";

    contactButton.setAttribute("aria-expanded", String(!isOpen));
    contactButton.textContent = isOpen ? "Show Contact Details" : "Hide Contact Details";
    contactDetails.hidden = isOpen;
  });

  // Show or hide the full story section
  storyToggle.addEventListener("click", function () {
    const isOpen = storyToggle.getAttribute("aria-expanded") === "true";

    storyToggle.setAttribute("aria-expanded", String(!isOpen));
    storyToggle.textContent = isOpen ? "My story" : "Hide my story";
    storyDetails.hidden = isOpen;
  });

  // Show or hide the education details panel
  educationToggle.addEventListener("click", function () {
    const isOpen = educationToggle.getAttribute("aria-expanded") === "true";

    educationToggle.setAttribute("aria-expanded", String(!isOpen));
    educationToggle.textContent = isOpen ? "Show education details" : "Hide education details";
    educationDetails.hidden = isOpen;
  });

  // Show or hide the research details panel
  researchToggle.addEventListener("click", function () {
    const isOpen = researchToggle.getAttribute("aria-expanded") === "true";

    researchToggle.setAttribute("aria-expanded", String(!isOpen));
    researchToggle.textContent = isOpen ? "Show thesis details" : "Hide thesis details";
    researchDetails.hidden = isOpen;
  });

  // Show or hide the leadership details panel
  leadershipToggle.addEventListener("click", function () {
    const isOpen = leadershipToggle.getAttribute("aria-expanded") === "true";

    leadershipToggle.setAttribute("aria-expanded", String(!isOpen));
    leadershipToggle.textContent = isOpen ? "Show leadership details" : "Hide leadership details";
    leadershipDetails.hidden = isOpen;
  });

  // Reveal sections as they scroll into view for a more dynamic feel
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
});
