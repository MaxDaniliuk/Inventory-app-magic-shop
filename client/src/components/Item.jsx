export default function Item({ item, onClick }) {
  return (
    <div
      className="item"
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'cursor',
      }}
    >
      <h4>{item.name}</h4>
      <p className="description">{item.description}</p>
      <p className="price">
        {item.price} <span>gold coins</span>
      </p>
    </div>
  );
}
