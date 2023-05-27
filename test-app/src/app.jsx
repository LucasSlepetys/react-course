import React from 'react';
import Book_template from './book component/bookTemplate';
import { books } from './book component/bookList.js';

function App() {
  return (
    <>
      <h1>Best Sallers In Books</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return (
            <Book_template
              {...book}
              key={book.id}
              index={index + 1}
            ></Book_template>
          );
        })}
      </section>
    </>
  );
}

export default App;
