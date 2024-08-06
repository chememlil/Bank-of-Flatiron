import React, { useState } from 'react';
import AddTransactionForm from './AddTransactionForm';
import Search from './Search';
import TransactionList from './TransactionsList';

function AccountContainer({ transactions }) {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleSearch = (searchTerm) => {
    setFilteredTransactions(transactions.filter(transaction => 
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm transactions={transactions} setTransactions={setFilteredTransactions} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
