// import React from 'react';
import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

function TransactionHistory(items) {
  //   items = { items };
  //   console.log(items);
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
        {/* <TransactionHistoryItem items />
        {items.map(item => (
          <TransactionHistoryItem
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            id={item.id}
          />
        ))} */}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
