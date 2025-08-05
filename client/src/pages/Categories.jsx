import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState('Loading');

  useEffect(() => {
    let ignore = false;

    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');

        const contentType = response.headers.get('content-type');
        const isJson = contentType && contentType.includes('application/json');

        let json;
        if (isJson) {
          json = await response.json();
        }

        if (!response.ok) {
          const errorMessage = json?.message || 'Failed to load categories';
          throw new Error(errorMessage);
        }

        if (Array.isArray(json)) {
          if (!ignore) {
            setCategories(json);
            setError('');
          }
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        if (!ignore) {
          setCategories(null);
          setError(error.message || 'Something went wrong');
        }
      }
    };

    fetchCategories();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="categories-wrapper">
      <Link to="/">
        <span>← Home</span>
      </Link>
      <h2>Categories</h2>
      <div className="categories">
        {!categories ? (
          <p>{error}</p>
        ) : (
          categories.map(category => (
            <Link key={category} to={`/categories/${category}`}>
              {category}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
