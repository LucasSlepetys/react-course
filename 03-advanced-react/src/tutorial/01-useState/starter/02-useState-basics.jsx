import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>{' '}
      <button
        className='btn'
        type='button'
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Up 1
      </button>
    </div>
  );
};

export default UseStateBasics;
