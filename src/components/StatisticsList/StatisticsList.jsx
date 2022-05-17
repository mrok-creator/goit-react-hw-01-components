import PropTypes from 'prop-types';
import Statistics from 'components/Statistics';

function StatisticList({ stats, title }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(i => (
          <Statistics key={i.id} label={i.label} percentage={i.percentage} />
        ))}
      </ul>
    </section>
  );
}

StatisticList.defaultProps = {
  stats: [],
};

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default StatisticList;
