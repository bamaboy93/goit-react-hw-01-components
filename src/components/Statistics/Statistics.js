import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"

const Statistics = ({stats, title}) => (
  <section className={styles.Statistics}>
    <h2 className={styles.StatisticsTitle}>{ title }</h2>

  <ul className={styles.StatisticsList}>
    {stats.map(stat =>
      <li key={stat.id} className={styles.StatisticsItem} >
          <span>{ stat.label}: </span>
          <span>{ stat.percentage}%</span>
        </li>
      )}
  </ul>
  </section>
  
)
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;