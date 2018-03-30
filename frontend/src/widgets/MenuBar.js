import React, {Component} from 'react';
import Styles from './MenuBar.css';

class MenuBar extends Component {
  render = () => {
    return (
      <header className={Styles.MenuBar}>
        {this.props.children}
      </header>
    )
  };
}

export default MenuBar;
