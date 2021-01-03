import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import "./dropdown.css";

export default class Dropdown extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <div >
          <button type="button" class="button" onClick={this.handleButtonClick}>
            ☰
          </button>
          {this.state.open && (
            <div >
              <ul className="nul">
                <li className="nli">Notifications</li>
                <li className="nli">My Studio</li>
                <li className="nli">Connections</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

