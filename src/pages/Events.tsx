
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Live Traditional Music Night",
      date: "2024-07-15",
      time: "7:00 PM - 10:00 PM",
      description: "Enjoy authentic Pakistani folk music while dining with our special guests performing traditional songs.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      price: "Regular Menu Pricing",
      capacity: "60 guests",
      featured: true
    },
    {
      id: 2,
      title: "Chef's Special Tasting Menu",
      date: "2024-07-22",
      time: "6:00 PM - 9:00 PM",
      description: "Experience a carefully curated 7-course tasting menu featuring our chef's signature creations.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      price: "$75 per person",
      capacity: "30 guests",
      featured: false
    },
    {
      id: 3,
      title: "Family BBQ Weekend",
      date: "2024-07-29",
      time: "12:00 PM - 8:00 PM",
      description: "Special family-friendly BBQ event with live grilling, kids activities, and special family packages.",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop",
      price: "Starting at $25",
      capacity: "100 guests",
      featured: false
    }
  ];

  const dailySpecials = [
    {
      day: "Monday",
      title: "Biryani Monday",
      description: "20% off all biryani dishes",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop"
    },
    {
      day: "Tuesday",
      title: "Tandoor Tuesday",
      description: "Special pricing on all tandoor items",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
    },
    {
      day: "Wednesday",
      title: "Wing Wednesday",
      description: "Buy 2 get 1 free on chicken wings",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop"
    },
    {
      day: "Thursday",
      title: "Thali Thursday",
      description: "Complete meal thali for $18.99",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop"
    },
    {
      day: "Friday",
      title: "Family Feast Friday",
      description: "Family packages for 4+ people - 15% off",
      image: "https://images.unsplash.com/photo-1529444071841-f749df806976?w=400&h=300&fit=crop"
    }
  ];

  const privateEventPackages = [
    {
      name: "Intimate Gathering",
      capacity: "10-20 guests",
      features: ["Private dining area", "Customized menu", "Dedicated server"],
      startingPrice: "$300"
    },
    {
      name: "Corporate Event",
      capacity: "25-50 guests",
      features: ["Full room reservation", "Business lunch menu", "AV equipment", "Professional service"],
      startingPrice: "$750"
    },
    {
      name: "Grand Celebration",
      capacity: "50-100 guests",
      features: ["Entire restaurant booking", "Custom menu planning", "Event coordination", "Decorations"],
      startingPrice: "$1500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-black/60 to-black/40">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-432f7b0e7041?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Specials</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Join us for special events, daily offers, and unforgettable experiences
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these special occasions at Al Madina</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className={`bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${event.featured ? 'ring-2 ring-amber-400' : ''}`}>
                {event.featured && (
                  <div className="bg-amber-400 text-amber-900 text-center py-2 font-semibold text-sm">
                    Featured Event
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-amber-600 text-white">
                    {event.price}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users size={16} />
                      <span>Limited to {event.capacity}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Reserve Your Spot
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily Specials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Daily Specials</h2>
            <p className="text-xl text-gray-600">Something special every day of the week</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {dailySpecials.map((special) => (
              <Card key={special.day} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={special.image} 
                    alt={special.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-amber-600 mb-1">{special.day}</h3>
                  <h4 className="font-semibold text-gray-900 mb-2">{special.title}</h4>
                  <p className="text-sm text-gray-600">{special.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Private Events */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Private Event Packages</h2>
            <p className="text-xl text-gray-600">Perfect for your special celebrations and corporate events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privateEventPackages.map((package_, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">{package_.name}</CardTitle>
                  <p className="text-amber-600 font-semibold">{package_.capacity}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gray-900">Starting at {package_.startingPrice}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {package_.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-amber-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-amber-100 mb-8">
            Subscribe to our newsletter to be the first to know about upcoming events and special offers
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
