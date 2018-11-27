import React, { Component } from "react";
import logoDark from "./svg/logoDark.svg";
import logoLight from "./svg/logoLight.svg";
import "./Theme.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
  }
  componentDidMount() {
    const cachedHits = localStorage.getItem("theme");
    if (cachedHits) {
      this.setState({ theme: JSON.parse(cachedHits) });
      return;
    }
  }

  buttonClicked = () => {
    if (this.state.theme === "dark") {
      localStorage.setItem("theme", JSON.stringify("light"));
      this.setState({ theme: "light" });
    } else {
      localStorage.setItem("theme", JSON.stringify("dark"));
      this.setState({ theme: "dark" });
    }
  };
  render() {
    return (
      <div className={`theme-${this.state.theme}`}>
        <header className="App-header">
          {this.state.theme === "light" ? (
            <img src={logoLight} className="App-logo" alt="logo" />
          ) : (
            <img src={logoDark} className="App-logo" alt="logo" />
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <br />
          <button onClick={this.buttonClicked}>CLICK</button>
        </header>
      </div>
    );
  }
}

export default App;
