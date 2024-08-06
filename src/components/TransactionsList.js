import React from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            description={transaction.description}
            amount={transaction.amount}
            category={transaction.category}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;

