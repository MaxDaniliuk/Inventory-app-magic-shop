import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Item from '../components/Item';
import AsideItem from '../components/AsideItem';

export default function CategoryPage() {
  const { category } = useParams();
  const [categoryItems, setCategoryItems] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState('Loading');

  useEffect(() => {
    let ignore = false;

    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`/api/categories/${category}`);

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
            setCategoryItems(json);
            setError('');
          }
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        if (!ignore) {
          set(null);
          setError(error.message || 'Something went wrong');
        }
      }
    };

    fetchCategoryData();

    return () => {
      ignore = true;
    };
  }, [category]);

  return (
    <div>
      <div className="items-wrapper">
        <Link to="/categories">
          <span>← Categories</span>
        </Link>
        <h2>{category}</h2>
        <div className="aside-related-separator">
          <div className="items">
            {!categoryItems ? (
              <p>{error}</p>
            ) : (
              categoryItems.map(item => (
                <Item
                  key={`${item.category}/${item.id}`}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))
            )}
          </div>
          {selectedItem && (
            <AsideItem
              selectedItem={selectedItem}
              selectItem={() => setSelectedItem(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
