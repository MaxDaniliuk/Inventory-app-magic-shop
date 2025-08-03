import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    // http://127.0.0.1:8000/api/categories
    let ignore = false;

    const fetchCategories = async () => {
      const response = await fetch('/api/categories');
      if (!ignore && response.ok) {
        const json = await response.json();
        setCategories(json);
      }
    };

    fetchCategories();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="categories-wrapper">
      <Link to="/">← Back to Home</Link>
      <h2>Categories</h2>
      <div className="categories">
        {!categories ? (
          <p>Loading...</p>
        ) : Object.hasOwn(categories[0], 'message') ? (
          <p>{categories[0].message}</p>
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
