import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found | Schoolars Hub"
        description="The page you are looking for doesn't exist. Return to Schoolars Hub home."
        canonical={location.pathname}
        noindex
      />
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center max-w-md space-y-4">
          <h1 className="text-6xl font-serif font-bold text-primary">404</h1>
          <p className="text-xl text-muted-foreground">Oops! We couldn't find that page.</p>
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
