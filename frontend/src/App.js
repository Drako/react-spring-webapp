import React, { Component } from 'react';
import styles from './App.css';
import FontAwesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Brands from '@fortawesome/fontawesome-free-brands';

FontAwesome.library.add(Brands);

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
          <FontAwesomeIcon icon={['fab', 'react']} spin size='5x' className={styles["App-logo"]} />
          <h1 className={styles["App-title"]}>Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
