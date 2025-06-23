
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Buffalo Wings",
          description: "Crispy wings with classic buffalo sauce and blue cheese dip",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=300&h=200&fit=crop"
        },
        {
          name: "Loaded Nachos",
          description: "Crispy tortilla chips with cheese, jalapeños, and sour cream",
          price: "$10.99",
          image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop"
        },
        {
          name: "Mozzarella Sticks",
          description: "Golden fried mozzarella with marinara dipping sauce",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Burgers & Sandwiches",
      items: [
        {
          name: "DishO Classic Burger",
          description: "Prime beef patty with lettuce, tomato, onion, and our signature sauce",
          price: "$16.99",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
        },
        {
          name: "BBQ Pulled Pork",
          description: "Slow-cooked pulled pork with tangy BBQ sauce on brioche bun",
          price: "$15.99",
          image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop"
        },
        {
          name: "Philly Cheesesteak",
          description: "Thinly sliced steak with sautéed onions and melted cheese",
          price: "$17.99",
          image: "https://images.unsplash.com/photo-1555072956-7758cfb20c3f?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "American Classics",
      items: [
        {
          name: "Baby Back Ribs",
          description: "Tender ribs with smoky BBQ glaze and coleslaw",
          price: "$24.99",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop"
        },
        {
          name: "Fried Chicken & Waffles",
          description: "Crispy fried chicken served with maple syrup and butter",
          price: "$19.99",
          image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop"
        },
        {
          name: "Mac & Cheese Deluxe",
          description: "Creamy four-cheese blend with bacon and breadcrumb topping",
          price: "$14.99",
          image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Steaks & Grills",
      items: [
        {
          name: "Ribeye Steak",
          description: "12oz prime ribeye grilled to perfection with garlic butter",
          price: "$32.99",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop"
        },
        {
          name: "Grilled Salmon",
          description: "Atlantic salmon with lemon herb seasoning and vegetables",
          price: "$26.99",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop"
        },
        {
          name: "Pork Tenderloin",
          description: "Herb-crusted pork tenderloin with apple chutney",
          price: "$22.99",
          image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Beverages",
      items: [
        {
          name: "Craft Root Beer Float",
          description: "House-made root beer with vanilla ice cream",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1541975972-3924eb05a3de?w=300&h=200&fit=crop"
        },
        {
          name: "Fresh Lemonade",
          description: "Freshly squeezed lemons with mint and ice",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1556881286-ac2d5990c52a?w=300&h=200&fit=crop"
        },
        {
          name: "Iced Tea",
          description: "Sweet or unsweetened tea with lemon",
          price: "$3.99",
          image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Apple Pie à la Mode",
          description: "Classic American apple pie with vanilla ice cream",
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=300&h=200&fit=crop"
        },
        {
          name: "New York Cheesecake",
          description: "Rich and creamy cheesecake with berry compote",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop"
        },
        {
          name: "Chocolate Brownie Sundae",
          description: "Warm brownie with ice cream, chocolate sauce, and whipped cream",
          price: "$8.99",
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">DishO Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our mouth-watering American classics, each crafted with premium ingredients 
            and that authentic taste you've been craving.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {menuCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
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
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white">
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
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-xl text-red-100 mb-8">
            Visit us today or make a reservation to experience these amazing American flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold">
              Call for Takeout
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold">
              Make Reservation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
