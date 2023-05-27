import React from 'react';
import Book_template from './book component/bookTemplate';
import { books } from './book component/bookList.js';

function App() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book_template {...book} key={book.id}></Book_template>;
      })}
    </section>
  );
}

export default App;
