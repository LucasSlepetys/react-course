import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [people, setPeople] = useState([]);

  const fetchURL = async () => {
    try {
      const promise = await fetch(url);
      const data = await promise.json();
      setPeople(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //Cant have async inside of useEffect but can create function with async outside of it
    fetchURL();
  }, []);

  return (
    <section>
      <h3>Github users</h3>
      <ul className='users'>
        {people.map((person) => {
          const { id, login, avatar_url, html_url } = person;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
