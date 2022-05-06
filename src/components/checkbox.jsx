import React, { useState } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  let messeg;
  if (checked) {
    messeg = <p>Вы нажали чукбокс</p>;
  } else {
    messeg = <p>чукбокс не нажат</p>;
  }

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <p> состояние: {checked ? 'вкл' : 'выкл'} </p>
      <div>{messeg}</div>
    </div>
  );
};

export default Checkbox;
