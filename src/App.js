import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleMap from "./components/MyGoogle";
class App extends React.Component {
  state = {
    lat: 48.904449,
    lag: 2.373047,
  };

  render() {
    return (
      <div>
        hello
        <SimpleMap
          key={this.state.lag}
          lat={this.state.lat}
          lag={this.state.lag}
        />
      </div>
    );
  }
}

export default App;
