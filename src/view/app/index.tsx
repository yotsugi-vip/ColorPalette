import * as React from "react";
import * as ReactDOM from "react-dom";
import RgbHexSearch from './components/ColorTips';
import { messageSetting } from './message';
class App extends React.Component {
  private isView: boolean = false;
  constructor(props: any) {
    super(props);
  }

  test = () => {
    return (
      `<div>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>`
    )
  }

  test3 = () => {
    return (
      <div id="contextMenu">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    )
  }

  test2 = (event: MouseEvent) => {
    event;
    if (!this.isView) {
      this.isView = true;
      var elem = document.getElementById('root');
      elem?.insertAdjacentHTML('beforeend', this.test());
      let html = '';

      const menu = document.createElement('ul');
      menu.className = 'add';
      menu.style.opacity = '0';
      menu.innerHTML = html;
      elem?.appendChild(menu);
      let bounds = menu.getBoundingClientRect();
      menu.style.opacity = '1';
      elem = menu;
    } else {
      this.isView = false;
      let elem = document.getElementById('add');

      if (elem !== null) {
        elem.style.display = "none";
        elem.remove();
      }
    }
  }

  componentDidMount() {
    window.addEventListener('contextmenu', this.test2);
  }

  render() {
    return (
      <>
        <RgbHexSearch />
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
messageSetting();