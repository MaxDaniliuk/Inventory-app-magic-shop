import Item from './Item';

export default function AsideItem({ selectedItem, selectItem }) {
  return (
    <aside className="item-details">
      <div className="aside-wrapper">
        <button onClick={selectItem}>X</button>
        <div className="item-wrapper">
          <Item item={selectedItem} />
        </div>
      </div>
    </aside>
  );
}
