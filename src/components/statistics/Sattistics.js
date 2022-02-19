import PropTypes from 'prop-types';
import './Statistics.css';
import StatisticsList from './StatisticsList';

export default function Statistics({ title, props }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <StatisticsList data={props} />
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  props: PropTypes.array,
};
