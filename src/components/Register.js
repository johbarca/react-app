import React, { Component } from 'react';

import { Button } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Register</h1>
                <Button>注册</Button>
            </div>
        )
    }
}
export default Login;
