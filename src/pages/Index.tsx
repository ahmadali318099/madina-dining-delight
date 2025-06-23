
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice with tender chicken and exotic spices",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Lamb Karahi",
      description: "Tender lamb cooked in traditional Pakistani style with fresh herbs",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Mixed Grill",
      description: "Assorted BBQ platter with chicken tikka, seekh kabab, and lamb chops",
      price: "$32.99",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-black/50 to-black/30">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to <span className="text-amber-400">Al Madina</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
              Experience authentic flavors and warm hospitality in the heart of the city
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/reservations">Reserve Your Table</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/menu">View Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A Culinary Journey Awaits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Al Madina Restaurant, we blend traditional recipes with modern techniques to create 
              unforgettable dining experiences. Every dish tells a story of heritage and passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-amber-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Cuisine</h3>
              <p className="text-gray-600">Traditional recipes passed down through generations</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Skilled culinary artists creating masterpieces daily</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Warm Atmosphere</h3>
              <p className="text-gray-600">A welcoming space for families and friends to gather</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
            <p className="text-xl text-gray-600">Discover our most popular and beloved creations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card key={dish.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white rounded-xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-semibold">
                    {dish.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-all duration-300">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready for an Amazing Experience?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Book your table today and let us create memorable moments for you and your loved ones.
          </p>
          <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
            <Link to="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
