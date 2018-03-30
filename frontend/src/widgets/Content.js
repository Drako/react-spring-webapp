import React, {Component} from 'react';
import Styles from './Content.css';

class Content extends Component {
  render = () => {
    const divClasses = [Styles.Content];
    if (this.props.expanded) {
      divClasses.push(Styles.Fat);
    }

    return (
      <div className={divClasses.join(' ')}>
        {this.props.children}
      </div>
    )
  };
}

export default Content;
