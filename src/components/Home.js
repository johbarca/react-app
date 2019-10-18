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