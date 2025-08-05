import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from '../components/Item';
import AsideItem from '../components/AsideItem';

export default function Items() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState('Loading');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items');

        const contentType = response.headers.get('content-type');
        const isJson = contentType && contentType.includes('application/json');

        let json;
        if (isJson) {
          json = await response.json();
        }

        if (!response.ok) {
          const errorMessage = json?.message || 'Failed to load items';
          throw new Error(errorMessage);
        }

        if (Array.isArray(json)) {
          if (!ignore) {
            setItems(json);
            setError('');
          }
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        if (!ignore) {
          setItems(null);
          setError(error.message || 'Something went wrong');
        }
      }
    };

    fetchItems();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <div className="items-wrapper">
        <Link to="/">
          <span>← Home</span>
        </Link>
        <h2>Available items</h2>
        <div className="aside-related-separator">
          <div className="items">
            {!items ? (
              <p>{error}</p>
            ) : (
              items.map(item => (
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
