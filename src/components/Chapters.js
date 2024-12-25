import React from 'react';
import Button from './Button';

const Chapters = () => (
  <div className="flex flex-col">
    <div className="text-sm font-light uppercase">Current Chapter</div>
    <div className="text-base font-bold pb-2">
      Chapter
      {' '}
      {Math.floor(Math.random(0, 1) * 100)}
    </div>
    <Button
      filled
      title="Update Progress"
      type="button"
      className="bg-custom-blue p-2 text-white"
    />
  </div>
);

export default Chapters;
