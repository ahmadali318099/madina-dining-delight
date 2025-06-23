
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-black/60 to-black/40">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              A legacy of authentic flavors and warm hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Al Madina Legacy</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Established in 1985, Al Madina Restaurant began as a small family venture with a simple mission: 
                  to bring authentic, home-style cooking to our community. What started as a modest 20-seat establishment 
                  has grown into one of the city's most beloved dining destinations.
                </p>
                <p>
                  Our founder, Mohammad Al Madina, immigrated from Lahore, Pakistan, bringing with him generations 
                  of family recipes and an unwavering commitment to quality. His vision was to create a place where 
                  traditional flavors could flourish and families could gather to share memorable meals.
                </p>
                <p>
                  Today, we continue to honor that legacy while embracing modern culinary techniques and sustainable 
                  practices. Every dish tells a story of heritage, passion, and the love that goes into creating 
                  exceptional dining experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop" 
                alt="Restaurant interior"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-full flex items-center justify-center text-white text-center text-sm font-semibold">
                Serving Since<br/>1985
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Chefs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Master Chefs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our culinary team brings decades of experience and passion to every dish they create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop" 
                  alt="Head Chef"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Chef Hassan Ahmed</h3>
                <p className="text-amber-600 font-semibold mb-3">Head Chef & Owner</p>
                <p className="text-gray-600">
                  With over 25 years of experience, Chef Hassan leads our kitchen with expertise 
                  in traditional Pakistani and Indian cuisine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" 
                  alt="BBQ Specialist"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Chef Rashid Khan</h3>
                <p className="text-amber-600 font-semibold mb-3">BBQ Specialist</p>
                <p className="text-gray-600">
                  Master of the grill, Chef Rashid specializes in traditional tandoor cooking 
                  and BBQ techniques passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop" 
                  alt="Pastry Chef"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Chef Fatima Ali</h3>
                <p className="text-amber-600 font-semibold mb-3">Dessert Specialist</p>
                <p className="text-gray-600">
                  Our talented dessert chef creates traditional sweets and modern fusion 
                  desserts that perfectly complement our savory offerings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">
                We source only the finest ingredients and maintain the highest standards 
                in every aspect of our service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                Al Madina is more than a restaurant; it's a gathering place where 
                relationships are built and memories are made.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Tradition</h3>
              <p className="text-gray-600">
                We honor our cultural heritage while embracing innovation to create 
                timeless culinary experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience Our Story</h2>
          <p className="text-xl text-amber-100 mb-8">
            Join us for a meal and become part of the Al Madina family tradition.
          </p>
          <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
