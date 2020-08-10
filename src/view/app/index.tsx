import * as React from "react";
import * as ReactDOM from "react-dom";
 
class App extends React.Component {

    render() {
      return (
        <p>Hello World</p>
      )
    }
  } 


ReactDOM.render(<App />, document.getElementById("root"));