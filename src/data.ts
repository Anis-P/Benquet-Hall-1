import { Hall, Service, EventType, Package, Testimonial, BlogPost } from './types';

export const halls: Hall[] = [
  {
    id: 'royal-hall',
    name: 'Royal Grand Hall',
    description: 'A majestic space for grand weddings with royal architecture and crystal chandeliers.',
    capacity: '1000 - 1500 Guests',
    price: 'Starting from ₹2,50,000',
    image: 'https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg',
    amenities: ['Centralized AC', 'Valet Parking', 'Bridal Room', 'Stage Setup', 'LED Screens'],
    features: ['High Ceiling', 'Pillarless Design', 'Italian Marble Flooring'],
    type: 'Luxury'
  },
  {
    id: 'crystal-palace',
    name: 'Crystal Palace',
    description: 'An elegant venue with modern aesthetics and stunning glass architecture.',
    capacity: '500 - 800 Guests',
    price: 'Starting from ₹1,50,000',
    image: 'https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg',
    amenities: ['AC', 'Parking', 'Music System', 'Catering Area'],
    features: ['Glass Walls', 'Garden View', 'Modern Lighting'],
    type: 'Premium'
  },
  {
    id: 'emerald-garden',
    name: 'Emerald Garden Arena',
    description: 'Perfect for outdoor-themed weddings and large receptions under the stars.',
    capacity: '1500 - 3000 Guests',
    price: 'Starting from ₹3,00,000',
    image: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
    amenities: ['Open Area', 'Parking', 'Kitchen Space', 'Stage'],
    features: ['Lush Greenery', 'Outdoor Bar', 'Themed Decor'],
    type: 'Grand'
  },
  {
    id: 'sapphire-suite',
    name: 'Sapphire Banquet',
    description: 'Ideal for engagements, mehendi ceremonies, and intimate gatherings.',
    capacity: '200 - 400 Guests',
    price: 'Starting from ₹80,000',
    image: 'https://images.pexels.com/photos/20485987/pexels-photo-20485987.jpeg',
    amenities: ['AC', 'Cozy Seating', 'Sound System'],
    features: ['Intimate Setting', 'Custom Decor', 'Central Location'],
    type: 'Boutique'
  }
];

export const services: Service[] = [
  {
    id: 'catering',
    title: 'Gourmet Catering',
    description: 'Authentic Indian cuisines with a modern twist, curated by top chefs.',
    icon: 'Utensils',
    image: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg'
  },
  {
    id: 'decoration',
    title: 'Exquisite Decor',
    description: 'Breathtaking floral and themed decorations tailored to your vision.',
    icon: 'Flower2',
    image: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg'
  },
  {
    id: 'photography',
    title: 'Photography & Film',
    description: 'Capturing your precious moments with cinematic perfection.',
    icon: 'Camera',
    image: 'https://images.pexels.com/photos/20485988/pexels-photo-20485988.jpeg'
  },
  {
    id: 'entertainment',
    title: 'Music & DJ',
    description: 'High-energy entertainment with professional sound and lighting.',
    icon: 'Music',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
  }
];

export const eventTypes: EventType[] = [
  { id: 'wedding', name: 'Grand Wedding', description: 'The royal wedding of your dreams.', image: 'https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg' },
  { id: 'reception', name: 'Reception', description: 'Elegant evening celebrations.', image: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg' },
  { id: 'engagement', name: 'Engagement', description: 'Beautiful beginnings.', image: 'https://images.pexels.com/photos/20485987/pexels-photo-20485987.jpeg' },
  { id: 'mehendi', name: 'Mehendi & Sangeet', description: 'Vibrant and joyful pre-wedding events.', image: 'https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg' },
  { id: 'corporate', name: 'Corporate Events', description: 'Professional and grand business meets.', image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg' },
  { id: 'birthday', name: 'Birthday Parties', description: 'Memorable celebrations for all ages.', image: 'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh & Priya Sharma',
    location: 'Jaipur',
    comment: 'Royal Banquet made our wedding truly magical. The decor was breathtaking and the service was impeccable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg'
  },
  {
    id: '2',
    name: 'Amit Verma',
    location: 'Delhi',
    comment: 'Hosted my daughter\'s engagement here. The food was the highlight - everyone still talks about it!',
    rating: 5,
    image: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Indian Wedding Decor Trends for 2024',
    excerpt: 'Discover the latest floral and lighting arrangements that are trending this season.',
    date: 'March 15, 2024',
    image: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg',
    category: 'Trends'
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Banquet Hall',
    excerpt: 'A comprehensive guide to selecting a venue that fits your guest list and budget.',
    date: 'February 20, 2024',
    image: 'https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg',
    category: 'Planning'
  }
];
