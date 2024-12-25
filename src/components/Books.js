import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import books from '../data/books';
import Book from './Book';
import AddBookForm from './AddBookForm';
import {
  getBooksError,
  getBooksStatus,
  selectAllBooks,
  fetchBooks,
} from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectAllBooks);
  const status = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  return status === 'succeeded' ? (
    <div className="container px-1 md:px-12 flex flex-col py-4 bg-gray-100">
      {books.map(({
        item_id, title, category, author,
      }, i) => (
        <div key={i} className="my-2 border border-gray-300">
          <Book
            item_id={item_id}
            title={title}
            category={category}
            author={author}
          />
        </div>
      ))}

      <hr className="w-full px-4 my-6" />
      <AddBookForm />
    </div>
  ) : status === 'failed' ? (
    <div>
      Error:
      {' '}
      {error}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Books;
