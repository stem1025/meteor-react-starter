import React from 'react';

export class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="ui secondary menu">
					<a href="/" className="active item">Home</a>
					<a href="/books" className="item">Books</a>
					<a href="/cart" className="item">Cart</a>
					<div className="right menu">
						<a href="/login" className="item">Account</a>
					</div>
				</div>
			</div>
		);
	}

}
