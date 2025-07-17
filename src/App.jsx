import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import HomePage from './components/pages/Home';
import PropertyDetailsPage from './components/property/PropertyDetails';
import FavoritesPage from './components/pages/Favorite';
import  transformProductToProperty  from './data/apiHelper';
import dummyProperties from './data/dummyProperties'; 
import './App.css'; 
const App = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  // Load favorites from memory state on component mount
  useEffect(() => {
    const savedFavorites = [];
    setFavorites(savedFavorites);
    
    // Set dummy properties initially
    setProperties(dummyProperties);
    setLoading(false);
  }, []);

  // Save favorites to memory state whenever favorites change
  useEffect(() => {
    // In a real app, this would save to localStorage
    // For this demo, we'll just keep it in memory
  }, [favorites]);

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products?limit=20');
        const data = await response.json();
        const transformedProperties = data.products.map(transformProductToProperty);
        
        // Combine dummy properties with API properties
        const allProperties = [...dummyProperties, ...transformedProperties];
        setProperties(allProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
        // Fallback to dummy data if API fails
        setProperties(dummyProperties);
      } finally {
        setLoading(false);
      }
    };

    // Delay API call to show dummy data first
    const timer = setTimeout(fetchProperties, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const viewDetails = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setCurrentPage('details');
  };

  const goBack = () => {
    setCurrentPage('home');
    setSelectedPropertyId(null);
  };

  const selectedProperty = properties.find(p => p.id === selectedPropertyId);
  const favoriteProperties = properties.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'home' && (
        <HomePage 
          properties={properties}
          loading={loading}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewDetails={viewDetails}
        />
      )}
      
      {currentPage === 'details' && (
        <PropertyDetailsPage 
          property={selectedProperty}
          onBack={goBack}
          isFavorite={favorites.includes(selectedPropertyId)}
          onToggleFavorite={toggleFavorite}
        />
      )}
      
      {currentPage === 'favorites' && (
        <FavoritesPage 
          favoriteProperties={favoriteProperties}
          onToggleFavorite={toggleFavorite}
          onViewDetails={viewDetails}
        />
      )}
    </div>
  );
};

export default App;