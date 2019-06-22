import React, { Component } from 'react';

import { Button } from 'antd';
import styles from './index.css'
import {Router, Route, Link}from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'jack'
        }
    }

    render() {
        return (
            <div className="main">
                {/* <h1> Hello {this.state.name}</h1> */}
                <div class="login-brand">
                    <img src={require('../../static/logo.png')} alt="logo" width="70px" />
                </div>
                <form class="box">
                    <h2>LOGIN</h2>
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="submit" />
                    <div className="text-foot">
                        Don't have an account?<Link to="/Register">Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default Home;
