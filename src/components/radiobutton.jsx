import React, { useState } from 'react';

const RadioButton = () => {
  const [value, setValue] = useState();

  const chengeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        name="radio"
        value="1"
        checked={value === '1' ? true : false}
        onChange={chengeValue}
      />

      <input
        type="radio"
        name="radio"
        value="2"
        checked={value === '2' ? true : false}
        onChange={chengeValue}
      />
    </div>
  );
};

export default RadioButton;
