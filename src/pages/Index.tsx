
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "BBQ Pulled Pork Sandwich",
      description: "Slow-cooked pulled pork with tangy BBQ sauce on a toasted brioche bun",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Classic Cheeseburger",
      description: "Premium beef patty with aged cheddar, lettuce, tomato, and our special sauce",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Buffalo Wings Platter",
      description: "Crispy wings tossed in our signature buffalo sauce with celery and blue cheese",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-red-900/70 to-blue-900/70 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-all duration-700"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-blue-900/50" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
              Welcome to <span className="text-red-400 drop-shadow-lg">DishO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
              Authentic American flavors with a modern twist - where every bite is a celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/25 transform hover:-translate-y-1">
                <Link to="/reservations">Reserve Your Table</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1">
                <Link to="/menu">View Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-all duration-300">All-American Dining Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At DishO, we celebrate the rich culinary heritage of America with farm-to-table ingredients, 
              bold flavors, and that warm hospitality that makes you feel right at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl hover:shadow-2xl hover:shadow-red-100 hover:bg-white">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <span className="text-3xl transform group-hover:scale-110 transition-all duration-300">🍔</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">Farm Fresh</h3>
              <p className="text-gray-600 leading-relaxed">Locally sourced ingredients from American farms</p>
            </div>
            
            <div className="text-center group transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-100 hover:bg-white">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <span className="text-3xl transform group-hover:scale-110 transition-all duration-300">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Award Winning</h3>
              <p className="text-gray-600 leading-relaxed">Recognized for excellence in American cuisine</p>
            </div>
            
            <div className="text-center group transform hover:scale-105 transition-all duration-500 p-8 rounded-2xl hover:shadow-2xl hover:shadow-green-100 hover:bg-white">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <span className="text-3xl transform group-hover:scale-110 transition-all duration-300">🇺🇸</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">American Spirit</h3>
              <p className="text-gray-600 leading-relaxed">Celebrating the diverse flavors of America</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-all duration-300">Signature Dishes</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Taste the flavors that put us on the map</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDishes.map((dish, index) => (
              <Card key={dish.id} className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-red-100 bg-white rounded-3xl overflow-hidden border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg transform group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    {dish.price}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                      <p className="text-sm text-gray-700 font-medium">Made Fresh Daily • All-American Taste</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">{dish.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dish.description}</p>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl py-3 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-red-200">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-4 text-lg rounded-full transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-200 transform hover:-translate-y-1">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cstar cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-all duration-300">Ready for Great Food & Good Times?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join us for an unforgettable dining experience where every meal feels like a celebration.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-xl font-bold rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2">
            <Link to="/reservations">Book Your Table</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
