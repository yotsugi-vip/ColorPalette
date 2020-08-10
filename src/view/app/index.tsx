import * as React from "react";
import * as ReactDOM from "react-dom";
import Hoge from './components/hoge';
import Top from './components/Top';

class App extends React.Component {

  render() {
    return (
      <>
        <p>Hello World</p>
        <Top />
        <Hoge />
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));