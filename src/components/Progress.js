import React from 'react';

const Progress = () => (
  <div className="flex flex-row">
    <div
      className="mx-4"
      style={{
        borderRadius: '50%',
        width: '4.25rem',
        height: '4.25rem',
        border: '5px solid #307bbe',
        borderLeftColor: '#e8e8e8',
        transform: 'rotate(45deg)',
      }}
    />
    <div className="flex flex-col">
      <p className="text-4xl">
        {Math.floor(Math.random() * 100)}
        %
      </p>
      <p className="font-light">Completed</p>
    </div>
  </div>
);

export default Progress;
