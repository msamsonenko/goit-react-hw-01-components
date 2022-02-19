import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="transaction-header">Type</th>
          <th className="transaction-header">Amount</th>
          <th className="transaction-header">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              id={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.propType = {
  items: PropTypes.array,
};
