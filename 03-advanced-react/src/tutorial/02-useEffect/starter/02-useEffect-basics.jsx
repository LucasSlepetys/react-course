import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('Hello from user effect');
  }, [value]);

  return (
    <div>
      <h1>value : {value}</h1>
      <h2>Second value : {secondValue}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me for hello
      </button>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        No hello from me
      </button>
    </div>
  );
};
export default UseEffectBasics;
