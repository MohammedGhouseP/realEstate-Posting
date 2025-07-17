import React from 'react';
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';
const transformProductToProperty = (product) => ({
  id: product.id,
  title: product.title,
  location: product.brand || 'Premium Location',
  price: product.price * 1000, // Convert to realistic property price
  image: product.thumbnail,
  images: product.images || [product.thumbnail],
  description: product.description,
  rating: product.rating,
  category: product.category,
  bedrooms: Math.floor(Math.random() * 4) + 1, // Random 1-4 bedrooms
  bathrooms: Math.floor(Math.random() * 3) + 1, // Random 1-3 bathrooms
  area: Math.floor(Math.random() * 2000) + 800, // Random 800-2800 sqft
  amenities: ['Parking', 'Swimming Pool', 'Gym', 'Security', 'Garden', 'Elevator'].slice(0, Math.floor(Math.random() * 4) + 2),
  type: ['Apartment', 'Villa', 'Plot', 'House'][Math.floor(Math.random() * 4)]
});

export default transformProductToProperty;