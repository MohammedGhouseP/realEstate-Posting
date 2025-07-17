
const dummyProperties = [
  {
    id: 'dummy-1',
    title: 'Luxury 3BHK Apartment in Downtown',
    location: 'Downtown, Hyderabad',
    price: 8500000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4a6?w=500&h=300&fit=crop'
    ],
    description: 'Beautiful 3BHK apartment with modern amenities, spacious rooms, and stunning city views. Perfect for families looking for luxury living.',
    rating: 4.8,
    category: 'residential',
    bedrooms: 3,
    bathrooms: 2,
    area: 1850,
    amenities: ['Parking', 'Swimming Pool', 'Gym', 'Security', 'Garden', 'Elevator'],
    type: 'Apartment'
  },
  {
    id: 'dummy-2',
    title: 'Modern Villa with Private Garden',
    location: 'Jubilee Hills, Hyderabad',
    price: 15000000,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop'
    ],
    description: 'Spacious villa with private garden, premium interiors, and excellent connectivity. Ideal for large families seeking privacy and comfort.',
    rating: 4.9,
    category: 'residential',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    amenities: ['Parking', 'Private Garden', 'Security', 'Swimming Pool', 'Gym'],
    type: 'Villa'
  },
  {
    id: 'dummy-3',
    title: 'Affordable 2BHK Near IT Hub',
    location: 'HITEC City, Hyderabad',
    price: 4500000,
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop'
    ],
    description: 'Well-designed 2BHK apartment close to major IT companies. Great for working professionals with easy access to metro and amenities.',
    rating: 4.3,
    category: 'residential',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    amenities: ['Parking', 'Security', 'Gym', 'Children Play Area'],
    type: 'Apartment'
  },
  {
    id: 'dummy-4',
    title: 'Premium Plot in Gated Community',
    location: 'Kompally, Hyderabad',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=300&fit=crop'
    ],
    description: 'Residential plot in a well-developed gated community with all modern infrastructure. Perfect for building your dream home.',
    rating: 4.5,
    category: 'land',
    bedrooms: 0,
    bathrooms: 0,
    area: 2400,
    amenities: ['Security', 'Underground Electricity', 'Water Supply', 'Road Access'],
    type: 'Plot'
  },
  {
    id: 'dummy-5',
    title: 'Cozy 1BHK Studio Apartment',
    location: 'Banjara Hills, Hyderabad',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop'
    ],
    description: 'Compact yet comfortable 1BHK studio apartment in the heart of the city. Perfect for young professionals and students.',
    rating: 4.1,
    category: 'residential',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    amenities: ['Parking', 'Security', 'Elevator', 'Power Backup'],
    type: 'Apartment'
  },
  {
    id: 'dummy-6',
    title: 'Spacious Family House',
    location: 'Miyapur, Hyderabad',
    price: 7200000,
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c39a?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1520637836862-4d197d17c39a?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=300&fit=crop'
    ],
    description: 'Traditional family house with modern renovations, large backyard, and excellent ventilation. Great for multi-generational families.',
    rating: 4.6,
    category: 'residential',
    bedrooms: 3,
    bathrooms: 2,
    area: 1950,
    amenities: ['Parking', 'Garden', 'Security', 'Solar Water Heater'],
    type: 'House'
  }
];
export default dummyProperties;