import { useState } from 'react';

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setTimeout(() => {
      setNumber((prevNum) => {
        return prevNum + 1;
      });
    }, 3000);
  }

  return (
    <div>
      <h1>{number}</h1>

      <button onClick={handleClick} type='button' className='btn'>
        Add 1
      </button>
    </div>
  );
};

export default UseStateGotcha;
