import * as React from "react";
import * as ReactDOM from "react-dom";
import { RgbComponent } from "./components/hooktest/RgbComponent";
import { HexComponent } from "./components/hooktest/HexComponent";
import { Provider, useStore, useDispatch } from "react-redux";
import { store } from "./store";
import { PushColors } from "./action";
import { colors } from "material-ui/styles";
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
    //    const dispatch = useDispatch();
    const data = event.data;
    console.log(data.command);
    vscode.postMessage({ command: 'recieve!!' });
    switch (data.command) {
      case 'INITIALIZE':
        console.log('initialize command recieve');
        //        dispatch(PushColors(data.data));
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
