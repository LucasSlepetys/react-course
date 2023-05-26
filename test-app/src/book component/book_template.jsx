import react from 'react';

const Book_template = (props) => {
  return (
    <div className='book'>
      <img src={props.img} alt='This is the image of the book' />
      <h2>{props.title}</h2>
      <h2 style={{ color: '#DFD1D1', fontSize: '1.5rem' }}>
        By: {props.author}
      </h2>
    </div>
  );
};

export default Book_template;
