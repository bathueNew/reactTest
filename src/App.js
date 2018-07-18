import React, { Component } from 'react';
import logo from './logo.svg';
import sty from './App.scss';
import SearchTest from './views'
import routers from './router/index';
import { Route, Redirect, Switch } from 'react-router-dom';
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
          <Switch>
            {routers.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} component={route.component} />
            ))}
          </Switch>
        {/* <SearchTest /> */}
      </div>
    );
  }
}

export default App;
