import PropTypes from 'prop-types';
export default function Stat({ label, quantity }) {
  return (
    <li className="stats-item">
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
}

Stat.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};
