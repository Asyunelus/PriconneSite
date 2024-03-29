import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';

import App from './pages/App';
import Main from './pages/Main';
import UserData from './pages/UserData';
import Notice from './pages/Notice';
import AnalysisMain from './pages/AnalysisMain';
import Analysis from './pages/Analysis';
import NoticeBoard from './pages/NoticeBoard';
import NotFound from './pages/NotFound';

ReactDOM.render(
    <Router>
      <div>
        <Route path="/">
          <App/>
          <Switch>
            <Route path="/" exact={true}>
                <Main/>
            </Route>
            <Route path="/notice">
                <Notice/>
            </Route>
            <Route path="/analysis/:cbdate" component={Analysis}>
            </Route>
            <Route path="/analysis">
                <AnalysisMain/>
            </Route>
            <Route path="/board/:nid" component={NoticeBoard}>
            </Route>
            <Route path="/user/:cbdate/:pid" component={UserData}>
            </Route>
            <Route component={NotFound}>
            </Route>
          </Switch>
        </Route>
      </div>
    </Router>,
    document.getElementById('root')
);