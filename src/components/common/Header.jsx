import React from 'react';
import { Heart } from 'lucide-react';
import PropertyCard from '../property/PropertyCard';

const Header = ({ currentPage, onPageChange }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">RE</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">RealEstate</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onPageChange('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'home' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('favorites')}
              className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'favorites' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Favorites
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;