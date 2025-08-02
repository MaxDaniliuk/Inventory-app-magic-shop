import { useEffect, useState } from 'react';
import Item from '../components/Item';

export default function Items() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    // http://127.0.0.1:8000/api/items
    let ignore = false;

    const fetchItems = async () => {
      const response = await fetch('/api/items');
      if (!ignore && response.ok) {
        const json = await response.json();
        setItems(json);
      }
    };

    fetchItems();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="items-wrapper">
      <h2>Available items</h2>
      <div className="items">
        {items === null ? (
          <p>Loading...</p>
        ) : Object.hasOwn(items[0], 'message') ? (
          <p>{items[0].message}</p>
        ) : (
          items.map(item => (
            <Item key={`${item.category}/${item.id}`} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
