import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './container/Home.js';
import About from './container/About.js';

const Routes = (
    <Router history={browserHistory}>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
    </Router>
)

export default Routes;