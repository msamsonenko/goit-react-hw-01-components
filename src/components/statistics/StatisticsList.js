import PropTypes from 'prop-types';
import StatItem from './StatItem';

export default function StatisticsList({ data }) {
  return (
    <ul className="stat-list">
      {data.map(({ id, label, percentage }) => {
        return <StatItem key={id} label={label} percentage={percentage} />;
      })}
    </ul>
  );
}
StatisticsList.propTypes = {
  data: PropTypes.array,
};
