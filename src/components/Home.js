/*
 * @Author: liulicheng
 * @Github: https://github.com/johbarca
 * @Date: 2019-10-23 15:57:08
 * @LastEditors: liulicheng
 * @LastEditTime: 2019-10-23 20:04:35
 */
import React, {
	Component
} from 'react';

import Header from "./header/index";
class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<Header />
		)
	}
}
export default Home;