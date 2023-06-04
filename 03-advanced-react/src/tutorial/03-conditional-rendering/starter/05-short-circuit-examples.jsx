import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return <div>{user && <SomeComponent name={user.name} />}</div>;
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Whaever retunrs</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
