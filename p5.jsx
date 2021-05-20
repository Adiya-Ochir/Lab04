import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';
import {HashRouter, Route, Link } from "react-router-dom";
import './p5.css';


ReactDOM.render(
    <div>
        <Header />
        <HashRouter>
            <div>
                <div id='toolbar'>
                    <Link className='linkText' to="/states">States</Link>
                    <Link className='linkText' to="/example">Example</Link>
                </div>
                <Route path="/states" component={States}></Route>
                <Route path="/example" component={Example}></Route>
            </div>
        </HashRouter>
    </div>,
    
    document.getElementById('reactapp'),
  );