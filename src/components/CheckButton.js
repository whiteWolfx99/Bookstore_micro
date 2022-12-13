import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCategory, checkCategory } from '../redux/category/category';

function CheckButton() {
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  const handleRemoveCategory = (id) => {
    dispatch(removeCategory(id));
  };

  const handleCheck = () => {
    dispatch(checkCategory());
  };

  return (
    <div>
      <button onClick={handleCheck} type="button">Check status</button>
      {categories.map((category) => (
        <div className={category.check ? 'show' : 'hide'} key={category.id}>
          <input type="checkbox" />
          <label htmlFor={category.name}>{category.name}</label>
          <button onClick={() => handleRemoveCategory(category.id)} type="button">Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CheckButton;
