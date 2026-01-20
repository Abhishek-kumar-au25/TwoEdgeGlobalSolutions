/* Mobile Menu */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".mobile-menu-btn");
  if (!btn) return;

  const nav = document.querySelector(".mobile-nav");
  if (nav) nav.classList.toggle("active");
});

/* Hero Carousel */
const slides = document.querySelectorAll(".hero-image");
const indicators = document.querySelectorAll(".indicator");
let current = 0;

function showSlide(i) {
  slides.forEach((s) => s.classList.remove("active"));
  indicators.forEach((d) => d.classList.remove("active"));
  slides[i]?.classList.add("active");
  indicators[i]?.classList.add("active");
}

if (slides.length) {
  showSlide(0);
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);
}

// Testimonials data
// 1️⃣ Define teamImages FIRST
const teamImages = [
  {
    image: "../assets/1.jpeg",
  },
  {
    image: "../assets/2.jpeg",

  },
  {
    image: "../assets/3.jpeg",

  },
  {
    image: "../assets/4.jpeg",
  },
  {
    image: "../assets/5.jpeg",
  },
  {
    image: "../assets/6.jpeg",
  },
];

// 2️⃣ THEN use it
const clientsaysTestimonials = [
  {
    name: "Anshu Chaturvedi",
    position: "Senior HR",
    company: "Two Edge Global Solutions",
    image: teamImages[0].image,
    rating: 5,
    text: "Two Edge Global Solutions has consistently delivered exceptional recruitment support. Their deep understanding of hiring requirements, quick turnaround time, and focus on quality talent make them a highly reliable partner for any organization.",
  },
  {
    name: "Shashikant Tiwari",
    position: "Talent Acquisition",
    company: "Two Edge Global Solutions",
    image: teamImages[1].image,
    rating: 5,
    text: "What truly sets Two Edge Global Solutions apart is their professionalism and structured approach. From sourcing to onboarding, every step is handled with precision and care, ensuring the right talent is placed at the right time.",
  },
  {
    name: "Neha",
    position: "HR Executive",
    company: "Two Edge Global Solutions",
    image: teamImages[2].image,
    rating: 5,
    text: "Working with Two Edge Global Solutions has made our hiring process seamless and efficient. Their team understands business needs well and consistently delivers candidates who align both technically and culturally with the organization.",
  },
  {
    name: "Aman Shukla",
    position: "Recruiter",
    company: "Two Edge Global Solutions",
    image: teamImages[3].image,
    rating: 5,
    text: "The personalized approach followed by Two Edge Global Solutions ensures high-quality placements. They focus not just on filling positions, but on building long-term value for both employers and candidates.",
  },
  {
    name: "Saransh Triphathi",
    position: "Senior",
    company: "Two Edge Global Solutions",
    image: teamImages[4].image,
    rating: 5,
    text: "Two Edge Global Solutions has been a dependable partner for staffing and workforce management. Their commitment to timelines, compliance, and service quality has significantly streamlined our recruitment operations.",
  },
  {
    name: "Somya",
    position: "Talent Acquisition",
    company: "Two Edge Global Solutions",
    image: teamImages[5].image,
    rating: 5,
    text: "Collaborating with Two Edge Global Solutions has been a great experience. Their strong talent network, clear communication, and proactive support make them an ideal recruitment partner for growing organizations.",
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
