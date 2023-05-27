import React from 'react';
import img_1 from './Images/book-1.jpg';
import Book_template from './book component/book_template';

const list_of_books = [
  {
    img: img_1,
    title: 'Curious Mind',
    author: 'Jordan Moore',
    id: 1,
  },

  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
    id: 2,
  },
];

function App() {
  function getBook(id) {
    const book = list_of_books.find((book) => book.id === id);
    console.log(book);
  }
  return (
    <section className='booklist'>
      {list_of_books.map((book) => {
        return (
          <Book_template
            {...book}
            key={book.id}
            getBook={getBook}
          ></Book_template>
        );
      })}
    </section>
  );
}

export default App;
