import React, {Component} from 'react';
import styles from './App.css';
import FontAwesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Brands from '@fortawesome/fontawesome-free-brands';
import Axios from 'axios';

FontAwesome.library.add(Brands);

class App extends Component {
  state = {
    message: 'Loading...'
  };

  componentDidMount = () => {
    Axios
      .get('/api/welcome')
      .then((response) => {
        this.setState({message: response.data.content});
      });
  };

  render = () => {
    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
          <FontAwesomeIcon icon={['fab', 'react']} spin size='5x' className={styles["App-logo"]}/>
          <h1 className={styles["App-title"]}>{this.state.message}</h1>
        </header>
      </div>
    );
  };
}

export default App;
