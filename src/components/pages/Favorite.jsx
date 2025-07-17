import React from 'react';
import { Heart } from 'lucide-react';
import PropertyCard from '../property/PropertyCard';
const FavoritesPage = ({ favoriteProperties, onToggleFavorite, onViewDetails }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Favorites</h1>
        <p className="text-xl text-gray-600">Properties you've saved for later</p>
      </div>

      {favoriteProperties.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">No favorites yet</h2>
          <p className="text-gray-500">Start browsing properties and save your favorites!</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {favoriteProperties.length} Saved Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProperties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default FavoritesPage;