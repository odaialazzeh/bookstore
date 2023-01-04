import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handlebtn = (e) => {
    e.preventDefault();
    dispatch(statusChecker());
  };
  return (

    <div className="categories">
      <h2>{status}</h2>
      <button type="button" onClick={handlebtn}>Check status</button>
    </div>
  );
};

export default Categories;
