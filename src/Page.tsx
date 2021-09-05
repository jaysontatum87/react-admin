/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import RecommendedNames from './components/pages/RecommendedNames';
import App from './App';

export default () => (
    <Router>
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    <Link to="recommendedNames">一覧</Link>
                </li>
            </ul>
        </div>

        <div id="page-content-wrapper">
            <Switch>
                <Route path="/recommendedNames" component={RecommendedNames} />
            </Switch>
        </div>
        <Switch>
            <Route exact path="/test2" render={() => <Redirect to="/app/dashboard/index" push />} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route exact path="/recommendedNames2" component={RecommendedNames} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>
);
