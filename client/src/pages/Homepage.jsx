import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="homepage">
      <Link to="/categories">Categories</Link>
      <Link to="/items">Items</Link>
    </div>
  );
}
