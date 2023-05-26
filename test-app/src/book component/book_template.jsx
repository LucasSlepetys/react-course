import react from 'react';

const Book_template = ({ img, title, author }) => {
  return (
    <div className='book'>
      <img src={img} alt='This is the image of the book' />
      <h2>{title}</h2>
      <h2 style={{ color: '#DFD1D1', fontSize: '1.5rem' }}>By: {author}</h2>
    </div>
  );
};

export default Book_template;
