import React from 'react';
import Book_template from './book component/book_template';
import { list_of_books } from './book component/bookList.js';

function App() {
  return (
    <section className='booklist'>
      {list_of_books.map((book) => {
        return <Book_template {...book} key={book.id}></Book_template>;
      })}
    </section>
  );
}

export default App;
