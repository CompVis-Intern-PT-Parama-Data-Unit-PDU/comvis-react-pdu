// OAuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil parameter isAuthenticated dari URL
    const params = new URLSearchParams(window.location.search);
    const isAuthenticated = params.get('isAuthenticated');

    if (isAuthenticated === 'true') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
}
