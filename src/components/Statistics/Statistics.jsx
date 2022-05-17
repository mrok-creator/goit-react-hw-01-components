import PropTypes from 'prop-types';

import s from './statistics.module.css';

function Statistic({ stats, title }) {
  const elements = stats.map(i => (
    <li key={i.id} className={s.item}>
      <span className={s.label}>{i.label}</span>
      <span className={s.percentage}>{i.percentage}%</span>
    </li>
  ));
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.stats}>{elements}</ul>
    </section>
  );
}

Statistic.defaultProps = {
  stats: [],
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Statistic;
