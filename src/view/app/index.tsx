import * as React from "react";
import * as ReactDOM from "react-dom";

import { RgbComponent } from "./components/rgb/RgbComponent";
import { HexComponent } from "./components/rgb/HexComponent";
import { Provider } from "react-redux";
import { store } from "./store";
import { PushColors } from "./action";

import { FavoriteColors, InputFavorite } from "./components/favorite/FavoriteColor";
import { Paper as Card } from "@material-ui/core";

function App() {
  return (
    <div>
      <Card style={{
        backgroundColor: "#3C3C3C"
      }}>
        <div style={{
          display: "flex",
          marginTop: "10px",
          marginLeft: "10px",
        }}>
          <div>
            <HexComponent />
          </div>
          <div style={{ marginLeft: "10px", marginTop: "10px" }}>
            <RgbComponent color="red" />
            <RgbComponent color="green" />
            <RgbComponent color="blue" />
          </div>
        </div>
      </Card>
      <div style={{marginTop:"10px"}}>
        <InputFavorite />
        <FavoriteColors />
      </div>
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
