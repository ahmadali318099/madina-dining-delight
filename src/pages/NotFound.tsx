
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-amber-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! It looks like this page has gone off the menu. 
            Let's get you back to something delicious!
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            <Link to="/">Return to Home</Link>
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-amber-50 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Hungry? Try these instead:</h3>
          <div className="text-amber-700 space-y-1">
            <p>🍛 Our famous Chicken Biryani</p>
            <p>🔥 Sizzling BBQ Platters</p>
            <p>🥘 Traditional Curry Selection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
