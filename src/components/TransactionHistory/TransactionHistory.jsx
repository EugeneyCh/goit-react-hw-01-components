// import React from 'react';
// import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  // items = { items };
  //   console.log(items);
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
