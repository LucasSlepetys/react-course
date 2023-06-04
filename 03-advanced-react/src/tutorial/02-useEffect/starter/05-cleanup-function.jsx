import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <button
        className='btn'
        type='button'
        onClick={() => setIsToggle(!isToggle)}
      >
        Toggle
      </button>
      {isToggle && <Toggled />}
    </div>
  );

  function Toggled() {
    useEffect(() => {
      const someFunc = () => {
        console.log(1);
      };
      window.addEventListener('scroll', someFunc);
      return () => window.addEventListener('scroll', someFunc);
    }, []);
    return (
      <div>
        <h1>Is Toggled</h1>
      </div>
    );
  }
};

export default CleanupFunction;
