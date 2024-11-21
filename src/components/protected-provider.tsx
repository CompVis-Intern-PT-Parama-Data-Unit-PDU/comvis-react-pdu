import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = await fetch('http://localhost:3001/api/auth/verify', {
            credentials: 'include',
            method: 'GET'
        });
        setIsAuthenticated(response.ok);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  if (isAuthenticated === false) {
    return <Navigate 
    to="/" 
    state={{ from: location }} 
    replace 
    />;
  }

  return <>{children}</>;
};