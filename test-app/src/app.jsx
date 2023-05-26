import React from 'react';
import img_1 from './Images/book-1.jpg';
import Book_template from './book component/book_template';

const list_of_books = [
  {
    img: img_1,
    title: 'Curious Mind',
    author: 'Jordan Moore',
    key: 1,
  },

  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
    key: 2,
  },
];

function App() {
  return (
    <section className='booklist'>
      {list_of_books.map((book) => {
        return <Book_template {...book} key={book.key}></Book_template>;
      })}
    </section>
  );
}

export default App;
