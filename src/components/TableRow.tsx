import { PenFill } from 'react-bootstrap-icons';
import { Person } from '../types/Person'
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../app/hooks';
import { selectPerson } from '../features/selectedPerson';

type Props = {
  person: Person;
}

export const TableRow: React.FC<Props> = ({ person }) => {
  const dispatch = useAppDispatch();
  const openModalHandler = () => {
    dispatch(selectPerson(person));
  };

  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.birthday_date}</td>
      <td>{person.phone_number}</td>
      <td>{person.address}</td>
      <td>
        <Button variant="dark" onClick={openModalHandler}>
          <PenFill />
        </Button>
      </td>
    </tr>
  )
}