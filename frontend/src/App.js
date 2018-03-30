import React, {Component} from 'react';
import Styles from './App.css';
import FontAwesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Brands from '@fortawesome/fontawesome-free-brands';
import Regular from '@fortawesome/fontawesome-free-regular';
import Axios from 'axios';
import MenuBar from "./widgets/MenuBar";
import SideBar from "./widgets/SideBar";
import Content from "./widgets/Content";

FontAwesome.library.add(Brands, Regular);

class App extends Component {
  state = {
    message: 'Loading...',
    sideBarExpanded: true,
  };

  componentDidMount = () => {
    Axios
      .get('/api/welcome')
      .then((response) => {
        this.setState({message: response.data.content});
      });
  };

  sideBarExpanded = (expanded) => {
    this.setState({
      sideBarExpanded: expanded
    })
  };

  render = () => {
    return (
      <div className={Styles.App}>
        <MenuBar>
          <FontAwesomeIcon icon={['fab', 'react']} spin size='2x' />
        </MenuBar>
        <SideBar onToggleExpansion={this.sideBarExpanded}>
        </SideBar>
        <Content expanded={!this.state.sideBarExpanded}>
          <p>{this.state.message}</p>
        </Content>
      </div>
    );
  };
}

export default App;
