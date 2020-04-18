import React from 'react';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import {Box} from 'theme-ui';

import UserDashboard from './pages/UserDashboard';
import Navbar from './components/Navbar';

function App(){
    return(
        <Router>
            <Box width="100vw" height="100vh">
                <Navbar/>
                <Switch>
                    <Route path="/:user/lists">
                        <UserDashboard/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/:user/lists"/>
                    </Route>
                </Switch>
            </Box>
        </Router>
    );
}

export default App;