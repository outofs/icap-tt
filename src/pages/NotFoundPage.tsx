import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {

  return (
    <div className="d-flex justify-content-center align-items-center">
      <h1>Looks like you got lost...</h1>
      <Link to="/">
        <Button variant="secondary" />
      </Link>
    </div>
  )
}