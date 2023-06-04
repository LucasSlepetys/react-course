import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  function login() {
    setUser({ fullName: 'Lucas Slepetys', email: 'lucas.slepetys@gmail.com' });
  }
  function logout() {
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <LoggedIn
          name={user?.fullName || user.email.split('.')[0]}
          logout={logout}
        />
      ) : (
        <LoggedOut login={login} />
      )}
    </div>
  );

  function LoggedOut({ login }) {
    return (
      <>
        <h4>Please login</h4>
        <button className='btn' type='button' onClick={login}>
          Log In
        </button>
      </>
    );
  }

  function LoggedIn({ name, logout }) {
    return (
      <>
        <h4>Hello there {name}!</h4>{' '}
        <button className='btn' type='button' onClick={logout}>
          Log Out
        </button>
      </>
    );
  }
};

export default UserChallenge;
