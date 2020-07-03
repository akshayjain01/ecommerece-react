import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        </Switch>
    </BrowserRouter>

  ,document.getElementById('root'));
