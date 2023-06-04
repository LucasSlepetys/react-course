import { useState } from 'react';

const ToggleChallenge = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <button
        className='btn'
        type='button'
        onClick={() => {
          setIsLogged((currentValue) => {
            return !currentValue;
          });
        }}
      >
        {isLogged ? 'Sign Out' : 'Sign In'}
      </button>
      {isLogged && <div>Hello There User!</div>}
    </div>
  );
};

export default ToggleChallenge;
