import * as React from "react";
import * as ReactDOM from "react-dom";

import { RgbComponent } from "./components/rgb/RgbComponent";
import { HexComponent } from "./components/rgb/HexComponent";
import { Provider } from "react-redux";
import { store } from "./store";
import { PushColors } from "./action";

const vscode = acquireVsCodeApi();

function App() {
  return (
    <div>
      <HexComponent />
      <RgbComponent color="red" ></RgbComponent>
      <RgbComponent color="green" ></RgbComponent>
      <RgbComponent color="blue" ></RgbComponent>
    </div>
  )
}

function message() {
  window.addEventListener('message', event => {
    const data = event.data;
    console.log(data.command);
    switch (data.command) {
      case 'INITIALIZE':
        console.log('initialize command recieve');
        store.dispatch(PushColors(data.data));
        break;
      default:
        break;
    }
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);

message();
