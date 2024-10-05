import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <input
      className={styles.filterInput}
      type="text"
      placeholder="Фильтровать пользователей"
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = { setFilter };

export default connect(null, mapDispatchToProps)(Filter);
