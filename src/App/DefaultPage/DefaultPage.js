// @flow
import React, { Component } from 'react';
import './DefaultPage.css';
import MainNav from './MainNav';
import Header from './Header';
import Footer from './Footer';

const DefaultScene = (
    props: {children: Component<*>}
) => (
    <div className="scene default-scene">
        <MainNav />
        <Header />
        <div className="content">
            {props.children}
        </div>
        <Footer />
    </div>
);

export default DefaultScene;