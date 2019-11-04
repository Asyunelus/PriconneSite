import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';

import App from './pages/App';
import Main from './pages/Main';
import UserData from './pages/UserData';
import Notice from './pages/Notice';

ReactDOM.render(
    <Router>
      <div>
        <Route path="/">
            <App/>
          <Route path="/main">
              <Main/>
          </Route>
          <Route path="/notice">
              <Notice/>
          </Route>
          <Route path="/user/:pid" component={UserData}>
          </Route>
        </Route>
      </div>
    </Router>,
    document.getElementById('root')
);