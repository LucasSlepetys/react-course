import { useState, Suspense, lazy } from 'react';

const SlowComponent = lazy(() => import('./SlowComponent'));

const LatestReact = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <button type='button' className='btn' onClick={() => setShow(!show)}>
        Show
      </button>
      {show && (
        <Suspense fallback={<h4>Loading</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
