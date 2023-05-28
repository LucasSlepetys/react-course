import { tourList } from '../data/list_of_links';
import Title from './Title';

function Tours() {
  return (
    <section className='section' id='tours'>
      <Title first='featured' second='tours'></Title>

      <div className='section-center featured-center'>
        {tourList.map((tour, index) => {
          return (
            <article key={index} className='tour-card'>
              <div className='tour-img-container'>
                <img src={tour.image} className='tour-img' alt='' />
                <p className='tour-date'>{tour.time}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.pText}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {tour.country}
                  </p>
                  <p>{tour.days}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
