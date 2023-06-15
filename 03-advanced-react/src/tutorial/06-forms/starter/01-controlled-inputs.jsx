import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(
      'Hello there ' + name + '. Can you confirm your email is: ' + email
    );
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setEmail('');
      setName('');
    }, 5000);
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShow(false);
            }}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setShow(false);
            }}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {show && <div>{message}</div>}
    </>
  );
};
export default ControlledInputs;
