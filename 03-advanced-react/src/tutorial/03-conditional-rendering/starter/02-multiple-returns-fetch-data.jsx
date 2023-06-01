import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        setUser(json);
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //if positions is import
  if (isError) {
    return <h1>An error has occurred</h1>;
  }

  if (!user) {
    return <h1>Loading data...</h1>;
  }

  //must be after user is no longer null, so we don't get the error that can't destruct a null property
  const { avatar_url, login, company, bio } = user;

  return (
    <div>
      <h1>Fetch data</h1>
      <img
        style={{ width: '150px', borderRadius: '50%' }}
        src={avatar_url}
        alt={login}
      />
      <h2>{login}</h2>
      <h3>{'Works at ' + company}</h3>
      <h4>{bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
