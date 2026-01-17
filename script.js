// Hero Image Carousel
let currentHeroIndex = 0;
let heroInterval;

function changeHeroImage(index) {
  const images = document.querySelectorAll(".hero-image");
  const indicators = document.querySelectorAll(".indicator");

  // Remove active class from all
  images.forEach((img) => img.classList.remove("active"));
  indicators.forEach((ind) => ind.classList.remove("active"));

  // Add active class to selected
  if (images[index]) {
    images[index].classList.add("active");
  }
  if (indicators[index]) {
    indicators[index].classList.add("active");
  }

  currentHeroIndex = index;
}

function startHeroCarousel() {
  heroInterval = setInterval(() => {
    const images = document.querySelectorAll(".hero-image");
    currentHeroIndex = (currentHeroIndex + 1) % images.length;
    changeHeroImage(currentHeroIndex);
  }, 5000);
}

function stopHeroCarousel() {
  if (heroInterval) {
    clearInterval(heroInterval);
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const menuIcon = mobileMenuBtn.querySelector(".menu-icon");
  const closeIcon = mobileMenuBtn.querySelector(".close-icon");

  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    mobileNav.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
}

// Smooth Scroll to Section
function scrollToSection(sectionId, event) {
  if (event) {
    event.preventDefault();
  }

  // Check if we're on the home page
  const currentPath = window.location.pathname;
  const isHomePage =
    currentPath === "/" ||
    currentPath === "/index.html" ||
    currentPath.endsWith("/");

  if (!isHomePage) {
    // Redirect to home page with hash
    window.location.href = "index.html#" + sectionId;
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Add click handlers for buttons if needed
document.querySelectorAll(".card-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Add your navigation or modal logic here
    console.log("Learn More clicked");
  });
});

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const activeModal = document.querySelector(".modal.active");
    if (activeModal) {
      closeModal(activeModal.id);
    }
  }
});

// Form Submission Handler
function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Log form data (in production, this would be sent to a server)
  console.log("Form submitted:", data);

  // Show success message
  alert(
    "Thank you for your interest! We will get back to you within 24 hours.",
  );

  // Reset form and close modal
  event.target.reset();
  closeModal("getStartedModal");
}

// Floating Button Pulse Effect
let floatingBtnHovered = false;

document.addEventListener("DOMContentLoaded", function () {
  const floatingBtn = document.getElementById("floatingBtn");
  if (floatingBtn) {
    floatingBtn.addEventListener("mouseenter", function () {
      floatingBtnHovered = true;
    });

    floatingBtn.addEventListener("mouseleave", function () {
      floatingBtnHovered = false;
    });
  }
});

// Scroll to section from hash on page load
window.addEventListener("load", function () {
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }

  // Start hero carousel
  startHeroCarousel();
});

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
      const mobileNav = document.getElementById("mobileNav");
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      if (mobileNav && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
        const menuIcon = mobileMenuBtn.querySelector(".menu-icon");
        const closeIcon = mobileMenuBtn.querySelector(".close-icon");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
      }
    }
  }, 250);
});

// Prevent body scroll when modal is open
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal-overlay")) {
    const modal = event.target.parentElement;
    if (modal && modal.classList.contains("modal")) {
      closeModal(modal.id);
    }
  }
});

// Animate elements on scroll (simple intersection observer)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements that should animate
  const animateElements = document.querySelectorAll(
    ".service-card, .vision-mission-card, .contact-card, .about-value-card",
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Initialize animations when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollAnimations);
} else {
  initScrollAnimations();
}

// Phone number formatting (optional enhancement)
function formatPhoneNumber(input) {
  const cleaned = input.value.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{0,2})(\d{0,10})$/);

  if (match) {
    input.value = !match[2] ? match[1] : `+${match[1]} ${match[2]}`;
  }
}

// Add phone formatting to phone inputs
document.addEventListener("DOMContentLoaded", function () {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach((input) => {
    input.addEventListener("input", function () {
      // Basic formatting - can be enhanced
      this.value = this.value.replace(/[^\d+\s]/g, "");
    });
  });
});

// Accessibility: Focus trap in modal
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  });

  firstFocusable.focus();
}

// Apply focus trap when modal opens
const originalOpenModal = openModal;
openModal = function (modalId) {
  originalOpenModal(modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    setTimeout(() => trapFocus(modal), 100);
  }
};

// Contact form validation (if on contact page)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length >= 10;
}

// Enhanced form validation
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const emailInputs = form.querySelectorAll('input[type="email"]');
      const phoneInputs = form.querySelectorAll('input[type="tel"]');

      let isValid = true;

      emailInputs.forEach((input) => {
        if (input.value && !validateEmail(input.value)) {
          isValid = false;
          input.style.borderColor = "#ef4444";
          setTimeout(() => {
            input.style.borderColor = "";
          }, 3000);
        }
      });

      phoneInputs.forEach((input) => {
        if (input.value && !validatePhone(input.value)) {
          isValid = false;
          input.style.borderColor = "#ef4444";
          setTimeout(() => {
            input.style.borderColor = "";
          }, 3000);
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert("Please check your email and phone number format.");
      }
    });
  });
});

// Smooth page transitions
window.addEventListener("beforeunload", function () {
  document.body.style.opacity = "0.8";
});

// Lazy load images (for better performance)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");
    lazyImages.forEach((img) => imageObserver.observe(img));
  });
}

// Console message for developers
console.log(
  "%cTwo Edge Global Solutions",
  "font-size: 24px; font-weight: bold; background: linear-gradient(to right, #fbe8af, #9c714b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
);
console.log("Website built with HTML, CSS, and JavaScript");
console.log("For inquiries: info@twoedgeglobal.com");
