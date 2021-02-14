import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './templates/Header';
import HomeContainer from './home/HomeContainer';
import CommentContainer from './comment/CommentContainer';
import RightPanel from './templates/RightPanel';

export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <div className="container">
            <Route path="/" component={HomeContainer} exact />
            <Route path="/comment/:id" component={CommentContainer} />
          </div>
        </Switch>
        <div className="right-panel">
          <RightPanel></RightPanel>
        </div>
      </main>
    );
  }
}

