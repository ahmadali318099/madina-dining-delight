
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Chicken Samosa",
          description: "Crispy pastry filled with spiced chicken and vegetables",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop"
        },
        {
          name: "Seekh Kabab",
          description: "Grilled minced meat skewers with aromatic spices",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop"
        },
        {
          name: "Chicken Wings",
          description: "Marinated chicken wings grilled to perfection",
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "BBQ Specialties",
      items: [
        {
          name: "Chicken Tikka",
          description: "Tender chicken pieces marinated in yogurt and spices",
          price: "$16.99",
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop"
        },
        {
          name: "Lamb Chops",
          description: "Juicy lamb chops grilled with traditional seasonings",
          price: "$26.99",
          image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop"
        },
        {
          name: "Mixed Grill Platter",
          description: "Assorted BBQ meats including chicken, lamb, and beef",
          price: "$32.99",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Traditional Desi",
      items: [
        {
          name: "Butter Chicken",
          description: "Creamy tomato-based curry with tender chicken pieces",
          price: "$18.99",
          image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop"
        },
        {
          name: "Lamb Karahi",
          description: "Slow-cooked lamb in traditional wok with fresh herbs",
          price: "$22.99",
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop"
        },
        {
          name: "Palak Paneer",
          description: "Fresh spinach curry with cottage cheese cubes",
          price: "$15.99",
          image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Biryani & Rice",
      items: [
        {
          name: "Chicken Biryani",
          description: "Aromatic basmati rice layered with spiced chicken",
          price: "$18.99",
          image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop"
        },
        {
          name: "Mutton Biryani",
          description: "Premium basmati rice with tender mutton pieces",
          price: "$24.99",
          image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop"
        },
        {
          name: "Vegetable Biryani",
          description: "Fragrant rice with mixed vegetables and dry fruits",
          price: "$14.99",
          image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Beverages",
      items: [
        {
          name: "Mango Lassi",
          description: "Traditional yogurt drink blended with fresh mangoes",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop"
        },
        {
          name: "Mint Lemonade",
          description: "Refreshing blend of mint, lemon, and sparkling water",
          price: "$3.99",
          image: "https://images.unsplash.com/photo-1556881286-ac2d5990c52a?w=300&h=200&fit=crop"
        },
        {
          name: "Kashmiri Chai",
          description: "Traditional pink tea with cardamom and pistachios",
          price: "$3.99",
          image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Gulab Jamun",
          description: "Soft milk dumplings in rose-flavored sugar syrup",
          price: "$5.99",
          image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop"
        },
        {
          name: "Kheer",
          description: "Creamy rice pudding with cardamom and nuts",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop"
        },
        {
          name: "Kulfi",
          description: "Traditional ice cream with pistachios and cardamom",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted dishes, each prepared with the finest ingredients 
            and authentic recipes passed down through generations.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {menuCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card key={item.name} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-amber-600 text-white">
                      {item.price}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="bg-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Visit us today or make a reservation to experience these delicious dishes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold">
              Call for Takeout
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold">
              Make Reservation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
