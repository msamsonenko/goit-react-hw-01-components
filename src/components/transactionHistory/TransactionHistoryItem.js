import PropTypes from 'prop-types';

export default function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td className="transaction-item">{capitalizeFirstLetter(type)}</td>
      <td className="transaction-item">{amount}</td>
      <td className="transaction-item">{currency}</td>
    </tr>
  );
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
