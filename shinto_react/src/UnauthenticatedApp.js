import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {Box} from 'theme-ui';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App(){
    return(
        <Router>
            <Box width="100vw" height="100vh">
                <Navbar/>
               
                <Switch>
                    <Route path='/login'>
                        <Login/>

                    </Route>
                    <Route path='/signup'>
                        <Signup/>

                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </Box>
        </Router>
    )
};

export default App;