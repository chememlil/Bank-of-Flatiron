import React from 'react';

function Transaction({ description, amount, category }) {
  return (
    <tr>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{category}</td>
    </tr>
  );
}

export default Transaction;
