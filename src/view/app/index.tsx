import * as React from "react";
import * as ReactDOM from "react-dom";

import { RgbComponent } from "./components/rgb/RgbComponent";
import { HexComponent } from "./components/rgb/HexComponent";
import { Provider } from "react-redux";
import { store } from "./store";
import { PushColors } from "./action";

import { FavoriteColors, InputFavorite } from "./components/favorite/FavoriteColor";

function App() {
  return (
    <div>
      <div style={{
        display: "flex"
      }}>
        <div>
          <HexComponent />
        </div>
        <div style={{marginLeft:"10px"}}>
          <RgbComponent color="red" ></RgbComponent>
          <RgbComponent color="green" ></RgbComponent>
          <RgbComponent color="blue" ></RgbComponent>
        </div>
      </div>
      <InputFavorite />
      <FavoriteColors />
    </div>
  );
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
