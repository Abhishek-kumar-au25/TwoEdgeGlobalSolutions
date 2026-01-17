# Two Edge Global Solutions - Pure HTML/CSS/JavaScript Website

This is the pure HTML, CSS, and JavaScript version of the Two Edge Global Solutions recruitment and staffing website.

## Files Included

### HTML Files
- **index.html** - Home page with hero carousel, services, vision/mission sections
- **about.html** - About us page with company story and values
- **contact.html** - Contact page with form and company information
- **privacy-policy.html** - Privacy policy page
- **terms-of-service.html** - Terms of service page (create similarly to privacy-policy.html)
- **cookie-policy.html** - Cookie policy page (create similarly to privacy-policy.html)

### CSS Files
- **styles.css** - All styles including:
  - Navy blue (#0C1320, #474E60) and gold (#f59e0b, #d97706) color scheme
  - Responsive design for mobile, tablet, and desktop
  - Brand name gradient effect
  - Hero carousel animations
  - Modal styles
  - Form styles
  - Footer and navigation styles

### JavaScript Files
- **script.js** - All interactive functionality including:
  - Hero image carousel (auto-rotating every 5 seconds)
  - Mobile menu toggle
  - Modal open/close functionality
  - Smooth scrolling
  - Form validation and submission
  - Scroll animations
  - Floating button with pulse animation

## Key Features

### Brand Identity
- **Company Name Gradient**: Uses `background: linear-gradient(to right, #fbe8af, #9c714b)` with text clipping
- **Color Scheme**: Navy blue slate and amber/gold throughout
- **Logo**: SVG placeholder with "TEGS" - replace with actual logo

### Responsive Design
- Mobile-first approach
- Breakpoints at 640px, 768px, and 1024px
- Collapsible mobile navigation
- Responsive grid layouts

### Interactive Elements
- **Hero Carousel**: 3 rotating background images with indicators
- **Get Started Modal**: Contact form with validation
- **Floating Join Button**: Animated button with pulse effect
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Form Validation**: Email and phone number validation

### Contact Information
- **Phone**: +91 9109125765 , 9399219240
- **Email**: twoedgeglobal@gmail.com
- **Address**: Vijay nagar near C21 mall , Indore
- **Hours**: Monday-Saturday 10 AM - 7 PM, Closed Sundays

### Social Media Links
- LinkedIn: https://www.linkedin.com/in/twoedge-solutions-0783b0397
- Instagram: https://www.instagram.com/tegs_twoedgeglobalsolution
- WhatsApp: https://wa.me/919109125765 , 9399219240

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No build process needed**: This is pure HTML/CSS/JS, no compilation required
3. **Works offline**: All assets are embedded or use CDN links
4. **No dependencies**: No frameworks or libraries required

## Customization

### Replacing the Logo
Replace the SVG data URLs in all HTML files:
```html
<img src="YOUR_LOGO_PATH.png" alt="Two Edge Global Solutions">
```

### Changing Colors
Edit the CSS custom properties in `styles.css`:
- Primary gold: `#f59e0b`, `#d97706`
- Navy slate: `#0C1320`, `#474E60`
- Gradient: `#fbe8af` to `#9c714b`

### Adding Hero Images
Replace the Unsplash URLs in `index.html` hero section with your own images

### Form Submission
Currently, forms show an alert. To connect to a backend:
1. Add action attribute to forms
2. Update `handleFormSubmit()` in `script.js`
3. Add server-side processing

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Not supported (uses modern CSS like CSS Grid)

## Performance

- Optimized CSS with minimal specificity
- Lazy loading for images
- Intersection Observer for scroll animations
- Debounced resize handlers

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance

## SEO

- Semantic HTML structure
- Meta descriptions (add to each page)
- Proper heading hierarchy
- Alt text for images

## Future Enhancements

To create the remaining policy pages (Terms of Service, Cookie Policy), copy the privacy-policy.html structure and update the content accordingly.

## Support

For questions or issues, contact:
- Email: twoedgeglobal@gmail.com
- Phone: +91 9109125765 , 9399219240

---

© 2026 Two Edge Global Solutions. All rights reserved.
