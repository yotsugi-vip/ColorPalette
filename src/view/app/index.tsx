import * as React from "react";
import * as ReactDOM from "react-dom";
import Hoge from './components/hoge';
import EasySearch from './components/EasySearch';

class App extends React.Component {

  render() {
    return (
      <>
        <EasySearch />
        <Hoge />
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));