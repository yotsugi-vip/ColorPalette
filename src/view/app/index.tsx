import * as React from "react";
import * as ReactDOM from "react-dom";
import { RgbComponent } from "./components/hooktest/RgbComponent";
import { HexComponent } from "./components/hooktest/HexComponent";
import { Provider, useStore, useDispatch } from "react-redux";
import { store } from "./store";
import { PushColors } from "./action";
import { colors } from "material-ui/styles";
const vscode = acquireVsCodeApi();
var isAddEvent 

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

// hook内じゃないのでdispatchエラー?
// store外ジャン...
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
