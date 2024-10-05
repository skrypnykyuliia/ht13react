import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Filter />
      <UserList />
    </div>
  );
};

export default App;
