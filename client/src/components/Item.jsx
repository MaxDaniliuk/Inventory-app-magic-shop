export default function Item({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'cursor',
      }}
    >
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}
