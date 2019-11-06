import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';

import App from './pages/App';
import Main from './pages/Main';
import UserData from './pages/UserData';
import Notice from './pages/Notice';
import NoticeBoard from './pages/NoticeBoard';
import NotFound from './pages/NotFound';

ReactDOM.render(
    <Router>
      <div>
        <Route path="/">
          <App/>
          <Switch>
            <Route path="/main">
                <Main/>
            </Route>
            <Route path="/notice">
                <Notice/>
            </Route>
            <Route path="/board/:nid" component={NoticeBoard}>
            </Route>
            <Route path="/user/:pid" component={UserData}>
            </Route>
            <Route component={NotFound}>
            </Route>
          </Switch>
        </Route>
      </div>
    </Router>,
    document.getElementById('root')
);