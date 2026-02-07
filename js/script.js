// TravelEase JavaScript
// Data is loaded from js/data.js

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    loadFeatures();
    loadDestinations();
    loadPopularDeals();
    loadTestimonials();
    setupSearchForm();
    setupCarousel();
});

// Load Features
function loadFeatures() {
    const container = document.getElementById('featuresRow');
    if (!container || typeof features === 'undefined') return;
    
    container.innerHTML = '';
    
    features.forEach(feature => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-6';
        col.innerHTML = `
            <div class="feature-card card h-100 shadow-sm border-0 text-center p-4">
                <div class="feature-icon mb-3">
                    <i class="bi ${feature.icon}"></i>
                </div>
                <h5 class="fw-bold">${feature.title}</h5>
                <p class="text-muted mb-0">${feature.description}</p>
            </div>
        `;
        container.appendChild(col);
    });
}

// Load Destinations
function loadDestinations() {
    const container = document.getElementById('destinationsRow');
    if (!container || typeof destinations === 'undefined') return;
    
    container.innerHTML = '';
    
    destinations.forEach(dest => {
        const col = document.createElement('div');
        // Use grid classes for desktop/tablet, will be overridden by CSS for mobile
        col.className = 'col-lg-3 col-md-4 col-sm-6';
        col.innerHTML = `
            <div class="destination-card">
                <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                <div class="destination-overlay">
                    <div class="destination-name">${dest.name}</div>
                    <div class="destination-price">From ${dest.price}</div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Load Popular Deals
function loadPopularDeals() {
    const container = document.getElementById('dealsRow');
    if (!container || typeof popularDeals === 'undefined') return;
    
    container.innerHTML = '';
    
    popularDeals.forEach(deal => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-6';
        col.innerHTML = `
            <div class="deal-card">
                <div class="deal-route">
                    <div class="deal-from">
                        <div class="deal-code">${deal.from}</div>
                        <div class="deal-city">${deal.fromCity}</div>
                    </div>
                    <div class="deal-arrow">
                        <i class="bi bi-arrow-right"></i>
                    </div>
                    <div class="deal-to">
                        <div class="deal-code">${deal.to}</div>
                        <div class="deal-city">${deal.toCity}</div>
                    </div>
                </div>
                <div class="deal-date">
                    <div class="deal-date-day">${deal.date}</div>
                    <div class="deal-date-month">${deal.month}</div>
                </div>
                <div class="deal-price">${deal.price}</div>
                <button class="deal-btn btn btn-primary">
                    <i class="bi bi-calendar-check me-2"></i>Book Now
                </button>
            </div>
        `;
        container.appendChild(col);
    });
}

// Load Testimonials (slider)
function loadTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    if (!track || typeof testimonials === 'undefined') return;
    
    track.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        slide.innerHTML = `
            <div class="testimonial-card">

                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${testimonial.avatar}</div>
                    <div class="testimonial-info">
                        <h6>${testimonial.name}</h6>
                        <p>${testimonial.location}</p>
                    </div>
                </div>
            </div>
        `;
        track.appendChild(slide);
    });
    
    setupTestimonialsSlider();
}

// Testimonials slider arrows
function setupTestimonialsSlider() {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('testimonialsPrev');
    const nextBtn = document.getElementById('testimonialsNext');
    if (!track || !prevBtn || !nextBtn) return;
    
    const slideAmount = 320;
    
    prevBtn.addEventListener('click', function() {
        track.scrollBy({ left: -slideAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function() {
        track.scrollBy({ left: slideAmount, behavior: 'smooth' });
    });
}

// Setup Search Form
function setupSearchForm() {
    const form = document.getElementById('searchForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Search functionality will be implemented with backend integration. Thank you for your interest!');
    });

    // Class dropdown: update label when option selected
    const classLabel = document.getElementById('classDropdownLabel');
    const classItems = form.querySelectorAll('.search-card-dark .dropdown-item[data-value]');
    classItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const value = this.getAttribute('data-value');
            if (classLabel) classLabel.textContent = value;
            classItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Swap Leaving From and Going To
    const swapBtn = document.getElementById('swapBtn');
    const leavingFrom = document.getElementById('leavingFrom');
    const goingTo = document.getElementById('goingTo');
    if (swapBtn && leavingFrom && goingTo) {
        swapBtn.addEventListener('click', function() {
            const a = leavingFrom.value;
            const b = goingTo.value;
            leavingFrom.value = b;
            goingTo.value = a;
        });
    }

    // Passengers widget: Adults, Children, Infants with +/- and DONE
    const travelersDisplay = document.getElementById('travelersDisplay');
    const travelersWrap = document.getElementById('travelersWrap');
    const passengersDropdown = document.getElementById('passengersDropdown');
    const passengersDone = document.getElementById('passengersDone');
    const adultsCountEl = document.getElementById('adultsCount');
    const childrenCountEl = document.getElementById('childrenCount');
    const infantsCountEl = document.getElementById('infantsCount');

    if (travelersDisplay && travelersWrap && passengersDropdown) {
        let adults = 1, children = 0, infants = 0;

        function getTotal() { return adults + children + infants; }
        function updateTravelersDisplay() {
            const total = getTotal();
            const label = total === 1 ? '1 Traveler' : total + ' Travelers';
            travelersDisplay.value = label;
            travelersDisplay.placeholder = label;
        }
        function updateCountsInWidget() {
            adultsCountEl.textContent = adults;
            childrenCountEl.textContent = children;
            infantsCountEl.textContent = infants;
            document.getElementById('adultsMinus').disabled = adults <= 1;
            document.getElementById('childrenMinus').disabled = children <= 0;
            document.getElementById('infantsMinus').disabled = infants <= 0;
        }

        travelersWrap.addEventListener('click', function(e) {
            e.stopPropagation();
            if (passengersDropdown.contains(e.target)) return;
            passengersDropdown.classList.toggle('show');
        });
        document.addEventListener('click', function() {
            passengersDropdown.classList.remove('show');
        });
        passengersDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        passengersDone.addEventListener('click', function() {
            updateTravelersDisplay();
            passengersDropdown.classList.remove('show');
        });

        function setupCounter(plusId, minusId, countEl, minVal, getCurrent, setCurrent) {
            const plus = document.getElementById(plusId);
            const minus = document.getElementById(minusId);
            if (!plus || !minus || !countEl) return;
            plus.addEventListener('click', function() {
                setCurrent(getCurrent() + 1);
                updateCountsInWidget();
            });
            minus.addEventListener('click', function() {
                if (getCurrent() > minVal) {
                    setCurrent(getCurrent() - 1);
                    updateCountsInWidget();
                }
            });
        }
        setupCounter('adultsPlus', 'adultsMinus', adultsCountEl, 1, () => adults, (v) => { adults = v; });
        setupCounter('childrenPlus', 'childrenMinus', childrenCountEl, 0, () => children, (v) => { children = v; });
        setupCounter('infantsPlus', 'infantsMinus', infantsCountEl, 0, () => infants, (v) => { infants = v; });

        updateCountsInWidget();
        updateTravelersDisplay();
    }

    // Departure and Return: separate fields, display date immediately after selection
    const departureDisplay = document.getElementById('departureDisplay');
    const returnDisplay = document.getElementById('returnDisplay');
    const departureDate = document.getElementById('departureDate');
    const returnDate = document.getElementById('returnDate');
    const returnDateWrap = document.getElementById('returnDateWrap');
    const tripTypeRadios = form.querySelectorAll('input[name="tripType"]');

    if (departureDisplay && returnDisplay && departureDate && returnDate && returnDateWrap) {
        function formatDate(input) {
            if (!input || !input.value) return '';
            const d = new Date(input.value);
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        }

        function isOneWay() {
            const oneWayRadio = form.querySelector('input[name="tripType"][value="oneway"]');
            return oneWayRadio && oneWayRadio.checked;
        }

        // Update each field's display as soon as its date is selected (order doesn't matter)
        function updateDepartureDisplay() {
            departureDisplay.value = formatDate(departureDate);
        }
        function updateReturnDisplay() {
            returnDisplay.value = formatDate(returnDate);
        }

        function setTripTypeUI() {
            const oneWay = isOneWay();
            if (oneWay) {
                returnDateWrap.classList.add('one-way-hidden');
                returnDate.disabled = true;
                returnDate.value = '';
                returnDisplay.value = '';
            } else {
                returnDateWrap.classList.remove('one-way-hidden');
                returnDate.disabled = false;
            }
        }

        tripTypeRadios.forEach(function(radio) {
            radio.addEventListener('change', setTripTypeUI);
        });

        departureDate.addEventListener('change', updateDepartureDisplay);
        returnDate.addEventListener('change', updateReturnDisplay);

        setTripTypeUI();
    }
}

// Setup Carousel for Destinations (removed - using grid layout instead)
function setupCarousel() {
}

// Add smooth scroll behavior for anchor links (skip href="#")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .destination-card, .deal-card, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
   
    setupScrollToTop();
});


function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
