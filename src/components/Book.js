import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';
import Progress from './Progress';
import Chapters from './Chapters';

const Book = ({
  item_id, title, category, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between items-center bg-white py-4 pl-8 pr-32 font-roboto">
      <div className="flex flex-col my-4">
        <div className="text-base font-semibold text-gray-500">{category}</div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-base font-light">{author}</div>
        <div className="flex flex-row items-center py-4">
          <Button type="button" title="Comments" />
          <hr className="px-4 rotate-90" />

          <Button
            type="button"
            onClick={() => dispatch(removeBook(item_id))}
            title="Remove"
          />
          <hr className="px-4 rotate-90" />

          <Button type="button" title="Edit" />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <Progress />
        <hr className="rotate-90 w-12 px-16" />
        <Chapters />
      </div>
    </div>
  );
};

export default Book;
