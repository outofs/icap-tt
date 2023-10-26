import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Looks like you got lost...</h1>
      <Link to="/">
        <Button variant="secondary">Back</Button>
      </Link>
    </div>
  )
}