import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="error not-found">
      <p>There is nothing to look at...</p>
      <p>
        Retrun to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
