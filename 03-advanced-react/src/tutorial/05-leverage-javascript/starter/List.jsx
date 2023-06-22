import { Person } from './Person';
import { people } from '../../../data';

function List() {
  return (
    <div>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
}

export default List;
