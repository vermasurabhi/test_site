// TravelEase Website Data
// This file contains all the content data for the website

// Features Data
const features = [
  {
    icon: "bi-headset",
    title: "Best Customer Care",
    description: "24/7 support to assist you anytime, anywhere",
  },
  {
    icon: "bi-tag-fill",
    title: "Price Match Promise",
    description: "We match any lower price you find elsewhere",
  },
  {
    icon: "bi-calendar-check",
    title: "Easy Booking",
    description: "Simple and secure booking process in minutes",
  },
  {
    icon: "bi-lightning-fill",
    title: "Live Offers",
    description: "Exclusive deals and flash sales updated daily",
  },
];

// Destinations Data
const destinations = [
  { 
    name: 'Paris', 
    price: '$899', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    name: 'Tokyo', 
    price: '$1,299', 
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    name: 'New York', 
    price: '$799', 
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    name: 'Dubai', 
    price: '$1,199', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    name: 'Bali', 
    price: '$699', 
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    name: 'London', 
    price: '$949', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    name: 'Rome', 
    price: '$849', 
    image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    name: 'Sydney', 
    price: '$1,399', 
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
  }
];

// Popular Deals Data
const popularDeals = [
  { 
    from: 'DL', 
    fromCity: 'Delhi', 
    to: 'JNP', 
    toCity: 'Japan', 
    date: '15', 
    month: 'Mar', 
    price: '$1,299' 
  },
  { 
    from: 'NY', 
    fromCity: 'New York', 
    to: 'LDN', 
    toCity: 'London', 
    date: '22', 
    month: 'Apr', 
    price: '$799' 
  },
  { 
    from: 'LA', 
    fromCity: 'Los Angeles', 
    to: 'PAR', 
    toCity: 'Paris', 
    date: '10', 
    month: 'May', 
    price: '$1,199' 
  },
  { 
    from: 'SF', 
    fromCity: 'San Francisco', 
    to: 'DXB', 
    toCity: 'Dubai', 
    date: '05', 
    month: 'Jun', 
    price: '$1,499' 
  },
  { 
    from: 'CH', 
    fromCity: 'Chicago', 
    to: 'ROM', 
    toCity: 'Rome', 
    date: '18', 
    month: 'Jul', 
    price: '$949' 
  },
  { 
    from: 'MI', 
    fromCity: 'Miami', 
    to: 'BAL', 
    toCity: 'Bali', 
    date: '12', 
    month: 'Aug', 
    price: '$1,399' 
  }
];

// Rental Cars Data (home page: first 3; rental-cars.html: all)
const rentalCars = [
  { name: 'Economy Sedan', pricePerDay: '$45', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { name: 'SUV Premium', pricePerDay: '$89', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { name: 'Luxury Convertible', pricePerDay: '$159', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { name: 'Compact Hatchback', pricePerDay: '$35', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { name: 'Minivan', pricePerDay: '$75', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  { name: 'Sports Car', pricePerDay: '$199', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
];

// Cruises Data (home page: first 3; cruise.html: all)
const cruises = [
  { name: 'Canada New England Cruise', price: '$1,299', nights: 7, days: 8, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', companyName: 'Royal Caribbean', departingFrom: 'Vancouver', portsOfCall: ['Seattle', 'Victoria', 'San Francisco', 'Astoria'], sailingDates: ['May 15, 2025', 'Jun 22, 2025', 'Jul 10, 2025'] },
  { name: 'Caribbean Island Hopper', price: '$899', nights: 5, days: 6, image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', companyName: 'Carnival Cruise Line', departingFrom: 'Miami', portsOfCall: ['Cozumel', 'Grand Cayman', 'Ocho Rios'], sailingDates: ['Mar 8, 2025', 'Apr 12, 2025', 'May 20, 2025'] },
  { name: 'Mediterranean Explorer', price: '$1,599', nights: 10, days: 11, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', companyName: 'Norwegian Cruise Line', departingFrom: 'Barcelona', portsOfCall: ['Nice', 'Rome', 'Naples', 'Palma de Mallorca', 'Valencia'], sailingDates: ['Jun 5, 2025', 'Jul 18, 2025', 'Aug 2, 2025'] },
  { name: 'Alaska Glacier Cruise', price: '$1,899', nights: 9, days: 10, image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', companyName: 'Holland America Line', departingFrom: 'Seattle', portsOfCall: ['Juneau', 'Skagway', 'Glacier Bay', 'Ketchikan', 'Victoria'], sailingDates: ['May 25, 2025', 'Jun 30, 2025', 'Jul 14, 2025'] },
  { name: 'Greek Islands Voyage', price: '$1,449', nights: 7, days: 8, image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', companyName: 'Celebrity Cruises', departingFrom: 'Athens', portsOfCall: ['Mykonos', 'Santorini', 'Crete', 'Rhodes', 'Kusadasi'], sailingDates: ['Apr 10, 2025', 'May 8, 2025', 'Sep 12, 2025'] },
  { name: 'Northern Europe Fjords', price: '$2,099', nights: 12, days: 13, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', companyName: 'Princess Cruises', departingFrom: 'Copenhagen', portsOfCall: ['Oslo', 'Bergen', 'Flam', 'Geiranger', 'Stockholm', 'Tallinn'], sailingDates: ['Jun 15, 2025', 'Jul 20, 2025', 'Aug 10, 2025'] },
];

// Testimonials Data
const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Amazing experience! The booking was seamless and the customer service was exceptional. Highly recommend!',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'Best travel agency I\'ve ever used. Great prices and even better service. Will definitely book again!',
    avatar: 'MC'
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    rating: 5,
    text: 'The entire trip was perfectly organized. From booking to return, everything was smooth and stress-free.',
    avatar: 'EW'
  },
  {
    name: 'David Brown',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'Outstanding service and unbeatable prices. TravelEase made our dream vacation a reality!',
    avatar: 'DB'
  }
];
