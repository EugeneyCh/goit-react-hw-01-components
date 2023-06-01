import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={css.id}
            style={{ backgroundColor: getRandomBackgroundColor() }}
            className={css.item}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
function getRandomBackgroundColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = '#' + red.toString(16) + green.toString(16) + blue.toString(16);

  return color;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: {
    label: PropTypes.string,
    percentage: PropTypes.number,
  },
};

export default Statistics;
