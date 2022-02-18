import PropTypes from 'prop-types';
import './Statistics.css';
import StatisticsList from './StatisticsList';

export default function Statistics({ props }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <StatisticsList data={props} />
    </section>
  );
}
Statistics.propTypes = {
  props: PropTypes.array,
};
