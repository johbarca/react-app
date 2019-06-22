import React, { Component } from 'react';

import { Button } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Home</h1>
                <Button>登录</Button>
            </div>
        )
    }
}
export default Login;
