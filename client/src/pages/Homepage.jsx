import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="homepage">
      <Link to="/categories">
        <span>Categories →</span>
      </Link>
      <Link to="/items">
        <span>Items →</span>
      </Link>
    </div>
  );
}
