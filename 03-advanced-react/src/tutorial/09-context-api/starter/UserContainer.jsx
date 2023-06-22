import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logOut } = useAppContext();

  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello there, {user.name.toUpperCase()}</p>
          <button className='btn' type='button' onClick={logOut}>
            Log out
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default UserContainer;
