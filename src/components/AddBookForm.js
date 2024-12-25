import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';
import Button from './Button';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      try {
        setLoading(true);
        dispatch(
          addNewBook({
            item_id: Date.now(),
            author: author.trim(),
            title: title.trim(),
            category: 'Classic',
          }),
        ).unwrap();
      } catch (e) {
        console.error('Failed to save the book', e);
      } finally {
        setLoading(false);
      }
    }

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col mb-6 font-montserrat">
      <div className="text-2xl font-bold mb-2 uppercase text-gray-500">
        Add New Book
      </div>
      <div className="flex flex-row w-full">
        <input
          type="text"
          className="p-3 mr-4 w-1/2"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          className="p-3 mr-4 w-1/3"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <Button
          className="p-3"
          type="submit"
          title={loading ? 'Adding Book...' : 'Add Book'}
          filled
        />
      </div>
    </form>
  );
};

export default AddBookForm;
