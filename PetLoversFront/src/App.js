import React from 'react';
import './App.css';
import Chat from '../src/pages/Chat/Chat';
import Login from '../src/pages/Login/Login';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './pages/Login/components/Header/Header';
import 'boxicons';

function App() {
    return(
        <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact> 
                    <Login />
                </Route>
                
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/Chat">
                    <Chat />
                </Route>
                
            </Switch>
        </Router>
        </div>
    );         

};

export default App;