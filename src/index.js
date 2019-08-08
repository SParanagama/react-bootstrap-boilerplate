import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var root = document.getElementById("app");
ReactDOM.render(<App name="React-Bootstrap" />, root);