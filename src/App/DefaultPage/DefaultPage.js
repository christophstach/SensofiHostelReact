// @flow
import React, { Component } from 'react';
import './DefaultPage.css';
import MainNav from './MainNav';
import Header from './Header';
import Footer from './Footer';

export default class DefaultScene extends Component {
    render() {
        return (
            <div className="scene default-scene">
                <MainNav />
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}