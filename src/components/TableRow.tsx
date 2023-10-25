import { Person } from '../types/Person'

type Props = {
  person: Person;
}

export const TableRow: React.FC<Props> = ({person}) => {
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.birthday_date}</td>
      <td>{person.phone_number}</td>
      <td>{person.address}</td>
    </tr>
  )
}