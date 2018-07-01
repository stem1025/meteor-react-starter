import React from 'react';
import { HeaderComponent } from "../../components/header-component/header-component";

export class IndexPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<HeaderComponent/>
				WELCOME TO MCS BOOKSTORE
			</React.Fragment>
		);
	}

}
