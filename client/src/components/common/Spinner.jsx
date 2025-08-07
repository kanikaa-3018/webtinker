import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Spinner = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show spinner briefly on initial load
    const initialTimer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // Show spinner briefly on route change
    setLoading(true);
    const routeTimer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(routeTimer);
  }, [location]);

  return (
    <div
      id="spinner"
      className={`${loading ? 'show' : ''} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
      style={{ zIndex: 9999 }}
    >
      <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;