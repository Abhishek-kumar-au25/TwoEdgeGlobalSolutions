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
