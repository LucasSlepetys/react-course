const Person = ({ name, removePerson, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button className='btn' type='button' onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};
export default Person;
