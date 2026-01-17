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

// Add click handlers for service buttons if needed
document.querySelectorAll(".service-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Add your navigation or modal logic here
    console.log("Learn More clicked for service");
  });
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

// APPBAR DROPDOWN MENU---------------------------------------------------------------------------------------------------

document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const menu = toggle.nextElementSibling;
    menu.classList.toggle("open");
  });
});

// CLIENT SAY SECTION-------------------------------------------------------------------------------------------------------
// Testimonials data
const clientsaysTestimonials = [
  {
    name: "Rajesh Kumar",
    position: "HR Manager",
    company: "Tech Solutions Pvt. Ltd.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    rating: 5,
    text: "Two Edge Global Solutions has been instrumental in helping us find top-tier talent. Their understanding of our requirements and quick turnaround time is exceptional. Highly recommend their services!",
  },
  {
    name: "Priya Sharma",
    position: "Operations Director",
    company: "Manufacturing Excellence Ltd.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    rating: 5,
    text: "We've been working with Two Edge Global Solutions for over 2 years now. Their professionalism, attention to detail, and ability to understand our staffing needs is unmatched. They're more than a vendor - they're a partner.",
  },
  {
    name: "Amit Patel",
    position: "CEO",
    company: "Digital Innovations Inc.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    rating: 5,
    text: "The team at Two Edge Global Solutions helped us scale our workforce efficiently. Their bulk hiring solutions saved us time and resources while maintaining quality. Outstanding service from start to finish!",
  },
  {
    name: "Sneha Reddy",
    position: "Talent Acquisition Lead",
    company: "Retail Giants Corp.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    rating: 5,
    text: "What sets Two Edge Global Solutions apart is their personalized approach. They take time to understand both the employer and candidate needs, ensuring perfect matches. Truly a reliable recruitment partner!",
  },
  {
    name: "Vikram Singh",
    position: "Plant Manager",
    company: "Industrial Solutions Ltd.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Exceptional payroll and staffing services! Two Edge Global Solutions has streamlined our HR operations and helped us maintain compliance. Their team is always responsive and professional.",
  },
  {
    name: "Neha Gupta",
    position: "VP of Human Resources",
    company: "Healthcare Partners Group",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    text: "Working with Two Edge Global Solutions has been a game-changer for our organization. Their extensive network and industry expertise have helped us fill critical positions quickly and efficiently.",
  },
  {
    name: "Sanjay Thakur",
    position: "Advocate",
    company: "Legal Associates",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "An extraordinary company that always provides the best candidates as per our requirements. They are punctual and reliable. You will never get any disappointment from them.",
  },
  {
    name: "Sameer Yadav",
    position: "Chartered Accountant",
    company: "Finance Experts LLP",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Being an Entrepreneur, I highly recommend Two Edge Global Solutions as the best consulting partner and candidate provider for your business and organization.",
  },
  {
    name: "Dr. A Prabhakar",
    position: "Director",
    company: "ITBIZCON Pvt Ltd",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
    rating: 5,
    text: "We rely on them for all our manpower requirements. They always fulfill our requests and get candidates with appropriate expertise and the right attitude. I have no hesitation in recommending them.",
  },
];

let clientsaysCurrentIndex = 0;
let clientsaysIsAutoPlaying = true;
const clientsaysItemsPerPage = 3;
const clientsaysTotalPages = Math.ceil(
  clientsaysTestimonials.length / clientsaysItemsPerPage,
);

// Generate star SVG
function clientsaysGenerateStars(rating) {
  let starsHTML = "";
  for (let i = 0; i < rating; i++) {
    starsHTML += `
                    <svg class="clientsays-star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                `;
  }
  return starsHTML;
}

// Render testimonials
function clientsaysRenderTestimonials() {
  const startIndex = clientsaysCurrentIndex * clientsaysItemsPerPage;
  const currentTestimonials = clientsaysTestimonials.slice(
    startIndex,
    startIndex + clientsaysItemsPerPage,
  );

  const grid = document.getElementById("clientsaysTestimonialsGrid");
  grid.innerHTML = currentTestimonials
    .map(
      (testimonial) => `
                <div class="clientsays-testimonial-card">
                    <div class="clientsays-card-decoration"></div>
                    
                    <div class="clientsays-card-header">
                        <div class="clientsays-quote-icon-wrapper">
                            <svg class="clientsays-quote-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        
                        <div class="clientsays-stars">
                            ${clientsaysGenerateStars(testimonial.rating)}
                        </div>
                    </div>

                    <p class="clientsays-testimonial-text">
                        "${testimonial.text}"
                    </p>

                    <div class="clientsays-client-info">
                        <img 
                            src="${testimonial.image}" 
                            alt="${testimonial.name}"
                            class="clientsays-client-image"
                        />
                        <div>
                            <h4 class="clientsays-client-name">${testimonial.name}</h4>
                            <p class="clientsays-client-position">${testimonial.position}</p>
                            <p class="clientsays-client-company">${testimonial.company}</p>
                        </div>
                    </div>
                </div>
            `,
    )
    .join("");
}

// Render dots
function clientsaysRenderDots() {
  const dotsContainer = document.getElementById("clientsaysDots");
  dotsContainer.innerHTML = Array.from(
    { length: clientsaysTotalPages },
    (_, i) => `
                <button 
                    class="clientsays-dot ${i === clientsaysCurrentIndex ? "clientsays-dot-active" : "clientsays-dot-inactive"}"
                    onclick="clientsaysGoToPage(${i})"
                    aria-label="Go to page ${i + 1}"
                ></button>
            `,
  ).join("");
}

// CHHOOSE US SECTION 2-------------
// Button click handlers
function chooseusReachOut() {
  // Scroll to contact section or open contact form
  alert(
    "Thank you for your interest! Please fill out the contact form or call us at +91 9399219240",
  );
  // You can also redirect to a contact page or scroll to contact section
  // window.location.href = '#contact';
}

function chooseusMakeEnquiry() {
  // Open enquiry form or navigate to business enquiry page
  alert(
    "Thank you for your interest! Our team will be happy to assist you. Please contact us at info@twoedgeglobal.com or call +91 9399219240",
  );
  // You can also redirect to a specific enquiry page
  // window.location.href = '#enquiry';
}

// Navigation functions
function clientsaysNextPage() {
  clientsaysCurrentIndex = (clientsaysCurrentIndex + 1) % clientsaysTotalPages;
  clientsaysIsAutoPlaying = false;
  clientsaysRenderTestimonials();
  clientsaysRenderDots();
}

function clientsaysPrevPage() {
  clientsaysCurrentIndex =
    (clientsaysCurrentIndex - 1 + clientsaysTotalPages) % clientsaysTotalPages;
  clientsaysIsAutoPlaying = false;
  clientsaysRenderTestimonials();
  clientsaysRenderDots();
}

function clientsaysGoToPage(index) {
  clientsaysCurrentIndex = index;
  clientsaysIsAutoPlaying = false;
  clientsaysRenderTestimonials();
  clientsaysRenderDots();
}

// Auto-play
function clientsaysAutoPlay() {
  if (clientsaysIsAutoPlaying) {
    clientsaysCurrentIndex =
      (clientsaysCurrentIndex + 1) % clientsaysTotalPages;
    clientsaysRenderTestimonials();
    clientsaysRenderDots();
  }
}

// Initialize
clientsaysRenderTestimonials();
clientsaysRenderDots();

// Start auto-play
setInterval(clientsaysAutoPlay, 5000);

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
console.log("For inquiries: twoedgeglobal@proton.me");

// ----------------------------GET IN TOUCH SECTION-----------------------------------
// CAPTCHA variables
let getintouchCaptchaAnswer = "";

// Generate CAPTCHA function
function getintouchGenerateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ["+", "-", "×"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let answer;
  let question;

  if (operation === "+") {
    answer = num1 + num2;
    question = `${num1} + ${num2} = ?`;
  } else if (operation === "-") {
    const larger = Math.max(num1, num2);
    const smaller = Math.min(num1, num2);
    answer = larger - smaller;
    question = `${larger} - ${smaller} = ?`;
  } else {
    answer = num1 * num2;
    question = `${num1} × ${num2} = ?`;
  }

  getintouchCaptchaAnswer = answer.toString();
  document.getElementById("getintouchCaptchaQuestion").textContent = question;
  document.getElementById("getintouchCaptchaInput").value = "";
  document.getElementById("getintouchCaptchaError").textContent = "";
}

// Handle form submission
function getintouchHandleSubmit(event) {
  event.preventDefault();

  const userAnswer = document
    .getElementById("getintouchCaptchaInput")
    .value.trim();
  const errorElement = document.getElementById("getintouchCaptchaError");

  // Validate CAPTCHA
  if (userAnswer !== getintouchCaptchaAnswer) {
    errorElement.textContent = "Incorrect answer. Please try again.";
    getintouchGenerateCaptcha();
    return;
  }

  errorElement.textContent = "";

  // Get form values
  const name = document.getElementById("getintouchName").value;
  const email = document.getElementById("getintouchEmail").value;
  const company = document.getElementById("getintouchCompany").value;
  const message = document.getElementById("getintouchMessage").value;

  // Form submission logic here
  alert(
    "Form submitted successfully!\n\nName: " +
      name +
      "\nEmail: " +
      email +
      "\nCompany: " +
      company +
      "\nMessage: " +
      message,
  );

  // Reset form
  document.getElementById("getintouchForm").reset();
  getintouchGenerateCaptcha();
}

// Initialize CAPTCHA on page load
window.addEventListener("DOMContentLoaded", function () {
  getintouchGenerateCaptcha();
});

// ----------------------------UNDER DEVELOPMENT MODAL-----------------------------------
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// FORM MODAL
// Load Get Started modal once
fetch("modals/get-started-modal.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("modal-root").innerHTML += html;
  });

/* ---------- MODAL CONTROLS ---------- */

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* Close modal via overlay / close button */
document.addEventListener("click", e => {
  if (e.target.matches("[data-close]")) {
    document
      .querySelectorAll(".modal.active")
      .forEach(m => m.classList.remove("active"));

    document.body.style.overflow = "";
  }
});

/* ESC key support */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".modal.active")
      .forEach(m => m.classList.remove("active"));

    document.body.style.overflow = "";
  }
});


