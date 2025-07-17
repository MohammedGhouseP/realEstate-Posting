import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Star,
  Phone,
  Mail
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const PropertyDetailsPage = ({
  property,
  onBack,
  isFavorite,
  onToggleFavorite,
}) => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Property not found
          </h2>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Properties</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ImageCarousel images={property.images} title={property.title} />
        </div>

        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>
            <button
              onClick={() => onToggleFavorite(property.id)}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </button>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <div className="text-3xl font-bold text-blue-600 mb-4">
              ₹{property.price.toLocaleString()}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <Bed className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">{property.bedrooms} BHK</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <Bath className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">{property.bathrooms} Baths</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <Square className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">{property.area} sqft</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Amenities
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Rating
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(property.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({property.rating.toFixed(1)})
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={() => setShowEnquiry(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Enquire Now
            </button>

            <div className="flex space-x-4">
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </button>
              <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Location</h3>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p>Interactive Map would be integrated here</p>
            <p className="text-sm">Location: {property.location}</p>
          </div>
        </div>
      </div>

      <Square
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        property={property}
      />
    </div>
  );
};

export default PropertyDetailsPage;
