import React, { Component } from "react";
import ToggleSwitch from "./toggle";

class App extends Component {
render() {
 return (
 <React.Fragment>
  <b><ToggleSwitch label="Notifications" /></b>
  <b><ToggleSwitch label="Subscribe" /></b>
 </React.Fragment>

 );
}
}
export default App;