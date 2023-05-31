import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  {
    console.log(people);
  }

  function removePerson(id) {
    setPeople(people.filter((person) => person.id !== id));
  }

  function clear() {
    setPeople([]);
  }

  return (
    <div>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              {person.name}{' '}
              <button
                type='button'
                className='btn'
                onClick={() => removePerson(person.id)}
              >
                {' '}
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <button type='button' className='btn' onClick={clear}>
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
