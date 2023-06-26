import React, { useState } from 'react';
export function Form({ addPerson }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please Provide Name Value');
      return;
    }
    addPerson(name);
    setName('');
  };
  const [name, setName] = useState('');
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className='btn btn-block' type='submit'>
        submit
      </button>
    </form>
  );
}
