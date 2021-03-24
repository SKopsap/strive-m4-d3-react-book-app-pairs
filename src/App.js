import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/Badge";
import BookList from "./components/BookList";

import { fantasy } from "./assets/fantasy";

class App extends Component {
  state = {
    fantasy: fantasy,
    selected: false,
  };
  // toggleClass = () => {
  //   this.setState({ selected: true });
  // };
  render() {
    return (
      <div className="App">
        <WarningSign text="no emotions allowed!" />
        <MyBadge color="dark" text="be a robot" />
        <BookList data={this.state} />
      </div>
    );
  }
}

export default App;
