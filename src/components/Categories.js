import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);
  return (
    <div className="container px-1 md:px-12">
      <div className="text-4xl px-12 py-6 mb-60">Under Construction...</div>
    </div>
  );
};

export default Categories;
