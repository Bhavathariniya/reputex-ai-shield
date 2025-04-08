
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-reputex-background p-4">
      <div className="glass-panel rounded-xl p-8 md:p-12 max-w-md w-full text-center">
        <div className="bg-reputex-danger/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="h-8 w-8 text-reputex-danger" />
        </div>
        
        <h1 className="text-4xl font-display font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        
        <Button asChild className="bg-reputex-highlight hover:bg-reputex-highlight/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
