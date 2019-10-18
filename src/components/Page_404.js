import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Page_404 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ height: '100vh' }}>
                <span className="font-26">404!页面没有找到，请</span>
                <Link to="/">返回首页</Link>
            </div>
        )
    }
}
export default Page_404;