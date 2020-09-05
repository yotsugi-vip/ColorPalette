import * as React from "react";
import * as ReactDOM from "react-dom";
import RgbHexSearch from './components/ColorTips';
import { RgbComponent } from "./components/hooktest/RgbComponent";
import { HexComponent } from "./components/hooktest/HexComponent";
const vscode = acquireVsCodeApi();

function App() {
  return (
    <div>
      {
        //<RgbHexSearch />
      }
      <HexComponent />
      <RgbComponent color="red" ></RgbComponent>
      <RgbComponent color="green" ></RgbComponent>
      <RgbComponent color="blue" ></RgbComponent>
    </div>
  )
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