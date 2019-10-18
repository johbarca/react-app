import React, { Component } from 'react'

import styles from './index.css'
import { Carousel } from 'antd';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <div className="brand">
                    <img src={require('../../static/cu-header.svg')} width="613" height="91" />
                </div>
                <nav>
                    <div className="container">
                        <ul className="nav-justified">
                            <li><a href="/admissions" className="clearfix"><strong>Admissions</strong></a></li>
                            <li><a href="/academics" className="clearfix"><strong>Academics</strong></a></li>
                            <li><a href="/research" className="clearfix"><strong>Research</strong></a></li>
                            <li><a href="/campusLife" className="clearfix"><strong>Campus Life</strong></a></li>
                            <li><a href="/about" className="clearfix"><strong>About</strong></a></li>
                            <li><a href="/news" className="clearfix"><strong>News</strong></a></li>
                        </ul>
                    </div>
                </nav>
                <Carousel effect="fade">
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default Header;