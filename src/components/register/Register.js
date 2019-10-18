/*
 * @Author: liulicheng
 * @Github: https://github.com/johbarca
 * @Date: 2019-06-22 21:16:57
 * @LastEditors: liulicheng
 * @LastEditTime: 2019-10-16 22:05:15
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.css'
class Register extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="main">
				<div className="register_form">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: 'Please input your username!' }],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Username"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Password"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true,
							})(<Checkbox>Remember me</Checkbox>)}
							<a className="login-form-forgot" href="">Forgot password</a>
							<Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
							Or <a href="">register now!</a>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}
export default Form.create()(Register);
