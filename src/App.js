import React, { Component } from 'react';
import logo from './logo.svg';
import sty from './App.scss';
import SearchTest from './views'
class App extends Component {
  render() {
    return (
      <div className={sty.App}>
        <header className={sty.header}>
          <img src={logo} className={sty.logo} alt="logo" />
          <h1 className={sty.title}>Welcome to React</h1>
        </header>
        {/* <p className={sty.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <SearchTest />
      </div>
    );
  }
}

export default App;
