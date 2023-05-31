import { serviceList } from '../data/list_of_links';
import Title from './Title';

function Services() {
  return (
    <section className='section services' id='services'>
      <Title first='our' second='services'></Title>
      <div className='section-center services-center'>
        {console.log(serviceList.length)}
        {serviceList.map((service, index) => {
          return (
            <article key={index} className='service'>
              <span className='service-icon'>
                <i className={'fas ' + service.className + ' fa-fw'}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{service.h4Text}</h4>
                <p className='service-text'>{service.pText}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
