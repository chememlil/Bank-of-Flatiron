import React, { useState, useEffect } from 'react';
import AccountContainer from './AccountContainer';


function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1><center>Bank of Flatiron</center></h1>
      </header>
      <AccountContainer transactions={transactions} />
    </div>
  );
}

export default App;
