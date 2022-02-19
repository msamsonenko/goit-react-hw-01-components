import PropTypes from 'prop-types';

export default function StatItem({ id, label, percentage }) {
  return (
    <li
      className="item"
      key={id}
      style={{ backgroundColor: `#${randomColor()}` }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

StatItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
