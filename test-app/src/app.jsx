import React from 'react';
import img_1 from './Images/book-1.jpg';
import Book_template from './book component/book_template';

const list_of_books = [
  {
    img: img_1,
    title: 'Curious Mind',
    author: 'Jordan Moore',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  },
];

function App() {
  return (
    <section className='books_container'>
      <Book_template {...list_of_books[0]} />
      <Book_template {...list_of_books[1]} />
    </section>
  );
}

export default App;
