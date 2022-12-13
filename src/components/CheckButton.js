import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CheckButton() {
  const categories = useSelector((state) => state.categories.categories);

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <button onClick={handleCheck} type="button">Check status</button>
      {categories.map((category) => (
        <div className={checked ? 'show' : 'hide'} key={category.id}>
          <input type="checkbox" />
          <label htmlFor={category.name}>{category.name}</label>
          <button type="button">Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CheckButton;
