// @flow
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import './App.css';
import DefaultPage from './App/DefaultPage';
import LandingPage from './App/LandingPage';
import Home from './App/DefaultPage/Sites/Home';
import Booking from './App/DefaultPage/Sites/Booking';
import PricesRooms from './App/DefaultPage/Sites/PricesRooms';
import About from './App/DefaultPage/Sites/About';

const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={LandingPage}/>
        <Route path="/" component={DefaultPage}>
            <Route path="home" component={Home}/>
            <Route path="booking" component={Booking}/>
            <Route path="prices-rooms" component={PricesRooms}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>
);

export default App;
