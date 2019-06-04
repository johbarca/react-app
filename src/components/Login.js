import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Login</h1>
                <Button>Default</Button>
            </div>
        )
    }
}
export default Login;
