import react from 'react';

const Book_template = ({ img, title, author }) => {
  return (
    <div>
      <img src={img} alt='This is the image of the book' />
      <h2>{title}</h2>
      <h3>By: {author}</h3>
    </div>
  );
};

export default Book_template;
