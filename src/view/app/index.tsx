import * as React from "react";
import * as ReactDOM from "react-dom";
import RgbHexSearch from './components/ColorTips';

const vscode = acquireVsCodeApi();

class App extends React.Component {
  render() {
    return (
      <>
        <RgbHexSearch />
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener('message', event => {
  const data = event.data;
  console.log(data.command);
  vscode.postMessage({ command: 'recieve!!' });
  switch (data.command) {
    case '':
      break;
    default:
      break;
  }
});