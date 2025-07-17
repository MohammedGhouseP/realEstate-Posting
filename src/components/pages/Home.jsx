import React, { useState } from "react";
import FilterSection from "../filter/FilterSection";
import PropertyCard from "../property/PropertyCard";
import LoadingSkeleton from "../common/LoadingSkeleton";

const HomePage = ({
  properties,
  loading,
  favorites,
  onToggleFavorite,
  onViewDetails,
}) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    type: "",
    bedrooms: "",
    search: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProperties = properties.filter((property) => {
    const matchesPrice =
      (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || property.price <= parseInt(filters.maxPrice));
    const matchesType = !filters.type || property.type === filters.type;
    const matchesBedrooms =
      !filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms);
    const matchesSearch =
      !filters.search ||
      property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      property.location.toLowerCase().includes(filters.search.toLowerCase());

    return matchesPrice && matchesType && matchesBedrooms && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-gray-600">
          Discover amazing properties in prime locations
        </p>
      </div>

      <FilterSection filters={filters} onFilterChange={handleFilterChange} />

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {filteredProperties.length} Properties Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={onToggleFavorite}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No properties found matching your criteria.
              </div>
              <button
                onClick={() =>
                  setFilters({
                    minPrice: "",
                    maxPrice: "",
                    type: "",
                    bedrooms: "",
                    search: "",
                  })
                }
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default HomePage;
