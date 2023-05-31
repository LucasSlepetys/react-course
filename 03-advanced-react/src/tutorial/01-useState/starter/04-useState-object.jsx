import { useState } from 'react';

const UseStateObject = () => {
  const people = [
    {
      name: 'John',
      age: 28,
      activity: 'Scream at the computer',
    },
    { name: 'Lucas', age: 17, activity: 'Doing parkour' },
    { name: 'Pedro', age: 14, activity: 'Eating ice cream' },
    { name: 'Mario', age: 19, activity: 'Jumping' },
    { name: 'Maria', age: 12, activity: 'Eating Pizza' },
    { name: 'Robert', age: 28, activity: 'Working' },
  ];

  //Sets Index
  const [index, setIndex] = useState(0);
  //Sets dictionary to start of (being index of 0)
  const [person, setPerson] = useState(people[0]);
  //Sets name to be shown on the btn (being the name person in the dictionary)
  const [name, setName] = useState(people[1].name);

  function showNextPerson() {
    if (index + 1 === people.length) {
      setIndex(() => {
        const newIndex = 0;
        setPerson(people[newIndex]);
        setName(people[1].name);
        return newIndex;
      });
    } else {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setPerson(people[newIndex]);
        setName(
          newIndex >= people.length - 1
            ? people[0].name
            : people[newIndex + 1].name
        );
        return newIndex;
      });
    }
  }

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>Enjoys: {person.activity}</h3>
      <button className='btn' type='button' onClick={showNextPerson}>
        {'Show ' + name}
      </button>
    </div>
  );
};

export default UseStateObject;
