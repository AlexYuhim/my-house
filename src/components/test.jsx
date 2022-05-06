import React from 'react';

export const ShoppingList = () => {
  const arr = ['Instagram', 'Oculus', 'WhatsApp'];
  return (
    <>
      <p>содержание массива:</p>
      <ul>
        {arr.map((elem) => (
          <li>{elem}</li>
        ))}
      </ul>
    </>
  );
};
