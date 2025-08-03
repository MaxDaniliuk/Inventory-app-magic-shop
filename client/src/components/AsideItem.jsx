import Item from './Item';

export default function AsideItem({ selectedItem, selectItem }) {
  return (
    <aside className="item-details">
      <button onClick={selectItem}>X</button>
      <Item item={selectedItem} />
    </aside>
  );
}
