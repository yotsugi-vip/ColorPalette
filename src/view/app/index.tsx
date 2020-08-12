import * as React from "react";
import * as ReactDOM from "react-dom";
import EasySearch from './components/EasySearch';

class App extends React.Component {

  render() {
    return (
      <>
        <EasySearch />
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));