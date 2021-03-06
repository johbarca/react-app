/*
 * @Author: liulicheng
 * @Github: https://github.com/johbarca
 * @Date: 2019-05-30 09:47:07
 * @LastEditors: liulicheng
 * @LastEditTime: 2019-10-16 21:31:02
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, MemoryRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from "../components/Home";
import Login from "../components/Login/";
import Register from "../components/register/Register";
import Main from '../components/main/index';
import Page_404 from "../components/Page_404";


class Routes extends Component {
    render() {
        return (
            // <Router history={hashHistory}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Main" component={Main} />
                {/* <Route path="/" onEnter={validate}>
                    <IndexRedirect to="tableDemo" />
                    <Route component={Home}>
                        <Route path="tableDemo" component={TableDemo}/>
                        <Route path="formDemo" component={FormDemo}/>
                    </Route>
                </Route> */}
                {/* <Route path="*" component={Page_404} /> */}
            </Router>
        )
    }
}
export default Routes;