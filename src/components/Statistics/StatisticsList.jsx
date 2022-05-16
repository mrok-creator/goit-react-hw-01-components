import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticList({ stats, title = '' }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(i => (
          <li className="item" key={i.id}>
            <Statistics label={i.label} percentage={i.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

// StatisticList.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//     })
//   ).isRequired,
//   title: PropTypes.string,
// };

export default StatisticList;
