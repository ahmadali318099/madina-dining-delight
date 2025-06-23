
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = {
    food: [
      {
        src: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=800&h=600&fit=crop",
        alt: "Chicken Biryani",
        title: "Signature Chicken Biryani"
      },
      {
        src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop",
        alt: "BBQ Platter",
        title: "Mixed BBQ Platter"
      },
      {
        src: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop",
        alt: "Butter Chicken",
        title: "Creamy Butter Chicken"
      },
      {
        src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop",
        alt: "Grilled Meats",
        title: "Fresh Grilled Specialties"
      },
      {
        src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop",
        alt: "Seekh Kabab",
        title: "Traditional Seekh Kabab"
      },
      {
        src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
        alt: "Desserts",
        title: "Traditional Desserts"
      }
    ],
    restaurant: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        alt: "Restaurant Interior",
        title: "Main Dining Area"
      },
      {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        alt: "Restaurant Ambiance",
        title: "Elegant Atmosphere"
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        alt: "Kitchen",
        title: "Our Professional Kitchen"
      },
      {
        src: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop",
        alt: "Private Dining",
        title: "Private Dining Area"
      }
    ],
    customers: [
      {
        src: "https://images.unsplash.com/photo-1529444071841-f749df806976?w=800&h=600&fit=crop",
        alt: "Happy Customers",
        title: "Families Enjoying Together"
      },
      {
        src: "https://images.unsplash.com/photo-1511795409834-432f7b0e7041?w=800&h=600&fit=crop",
        alt: "Dining Experience",
        title: "Special Occasions"
      },
      {
        src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop",
        alt: "Chef at Work",
        title: "Our Master Chef"
      },
      {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
        alt: "Kitchen Team",
        title: "Dedicated Kitchen Team"
      }
    ]
  };

  const allImages = [
    ...galleryCategories.food,
    ...galleryCategories.restaurant,
    ...galleryCategories.customers
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-black/60 to-black/40">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              A visual journey through our culinary world
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Food Gallery */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Delicious Creations</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryCategories.food.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Restaurant Interior */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restaurant Ambiance</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryCategories.restaurant.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Happy Customers & Team */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Community</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.customers.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Own Memories?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Join us for an unforgettable dining experience that you'll want to share.
          </p>
          <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
