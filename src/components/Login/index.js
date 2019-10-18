/*
 * @Author: liulicheng
 * @Github: https://github.com/johbarca
 * @Date: 2019-06-03 15:06:49
 * @LastEditors: liulicheng
 * @LastEditTime: 2019-10-17 10:28:02
 */
import React, { Component } from 'react';

import { Button } from 'antd';
import styles from './index.css'
import { Router, Route, Link } from 'react-router-dom';
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: "barca",
				password: "123"
			}
		}
	}

	handleSubmit = e => {
		console.log(this.state);
		e.preventDefault();
		this.props.history.push('/main');
        /* this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        }); */
	};
	handleChange(key, event) {
		let form = this.state.form
		for (let item in this.state.form) {
			if (item === key) {
				form[item] = event.target.value
				this.setState({ form: form })
			}
		}
	}
	change(e) {
		console.log(e.target.value);    //获取修改后的值
		this.setState({
			name: e.target.value
		})
	}

	render() {
		return (
			<div className={styles.main}>
				{/* <h1> Hello {this.state.name}</h1> */}
				<div className="login_brand">
					<img src={require('../../static/logo.png')} alt="logo" width="70px" />
				</div>
				<form className="box">
					<h2>LOGIN</h2>
					{/* <input type="text" placeholder="name" onChange={(event)=>{this.change(event)}}/> */}
					<input type="text" placeholder="name" onChange={this.handleChange.bind(this, 'name')} />
					<input type="password" placeholder="password" onChange={this.handleChange.bind(this, 'password')} />
					<input type="submit" onClick={this.handleSubmit} />
					<div className="text-foot">
						Don't have an account?<Link to="/Register">Register</Link>
					</div>
				</form>
			</div>
		)
	}
}
export default Login;
