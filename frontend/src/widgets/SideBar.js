import React, {Component} from 'react';
import Styles from './SideBar.css';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class SideBar extends Component {
  state = {
    expanded: true
  };

  toggleExpansion = () => {
    const expand = !this.state.expanded;

    this.setState({
      expanded: expand
    });

    if (typeof this.props.onToggleExpansion === 'function') {
      this.props.onToggleExpansion(expand);
    }
  };

  render = () => {
    const navClasses = [
      Styles.SideBar,
      this.state.expanded ? Styles.Expanded : Styles.Collapsed
    ];

    return (
      <nav className={navClasses.join(' ')}>
        <div className={Styles.SideBar_Content}>
          {this.props.children}
        </div>
        <div className={Styles.SideBar_Toggle} onClick={this.toggleExpansion}>
          {this.state.expanded
            ? <FontAwesomeIcon icon={['far', 'caret-square-left']}/>
            : <FontAwesomeIcon icon={['far', 'caret-square-right']}/>
          }
        </div>
      </nav>
    )
  };
}

export default SideBar;
