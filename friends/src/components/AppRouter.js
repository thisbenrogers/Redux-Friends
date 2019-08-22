import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './Login';
import FriendList from './FriendList';

import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <Router>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/friends">Friends</Link></li>
            </ul>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/friends" component={FriendList} />
        </Router>
    )
}

export default AppRouter;