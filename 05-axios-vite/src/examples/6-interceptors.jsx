import { useEffect } from 'react';
import authFetch from './interceptors';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('react-store-productssss');
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
