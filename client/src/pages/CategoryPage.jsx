import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Item from '../components/Item';
import AsideItem from '../components/AsideItem';

export default function CategoryPage() {
  const { category } = useParams();
  const [categoryItems, setCategoryItems] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // http://127.0.0.1:8000/api/categories
    let ignore = false;

    const fetchCategoryData = async () => {
      const response = await fetch(`/api/categories/${category}`);
      if (!ignore && response.ok) {
        const json = await response.json();
        setCategoryItems(json);
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
        <Link to="/">← Back to Categories</Link>
        <h2>{category}</h2>
        <div className="items">
          {categoryItems === null ? (
            <p>Loading...</p>
          ) : Object.hasOwn(categoryItems[0], 'message') ? (
            <p>{categoryItems[0].message}</p>
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
      </div>

      {selectedItem && (
        <AsideItem
          selectedItem={selectedItem}
          selectItem={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
