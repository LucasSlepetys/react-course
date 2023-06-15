import { useState } from 'react';
import { data } from '../../../data';
import { FaRegTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [newUser, setNewUser] = useState('');

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser) return;
    setUsers([...users, { name: newUser, id: uuidv4() }]);
    setNewUser('');
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={newUser}
            onChange={(e) => {
              setNewUser(e.target.value);
            }}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <h4 key={user.id}>{user.name}</h4>
            <span
              onClick={() => {
                removeUser(user.id);
              }}
            >
              <FaRegTrashAlt style={{ marginLeft: '10px' }} />
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
