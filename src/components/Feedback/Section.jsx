import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Section = ({ title = 'Section', children }) => {
  return (
    <section>
      <p className={css.title}>{title}</p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
