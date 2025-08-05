import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      className="error not-found"
      style={{
        textAlign: 'center',
        fontSize: '1.5rem',
      }}
    >
      <p>There is nothing to look at...</p>
      <p>
        Retrun to the{' '}
        <Link to="/">
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            → Homepage ←
          </span>
        </Link>
      </p>
    </div>
  );
}
