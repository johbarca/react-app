import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, MemoryRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Login from "../components/Login";
import Home from "../components/Home";
import Page_404 from "../components/Page_404";


class Routes extends Component {
    render() {
        return (
            // <Router history={hashHistory}>
            <Router>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home} />
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