import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Button, Form } from 'semantic-ui-react';

export class LoginPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Form>
					<Form.Field>
						<label>
							username
						</label>
						<input
							name="username"
							placeholder="example: mcs2018"
						/>
					</Form.Field>
					<Form.Field>
						<label>
							password
						</label>
						<input
							name="password"
							placeholder="example: 12345678"
						/>
					</Form.Field>
					<Button
						primary
						type="button"
						onClick={() => {
							let username = $("input[name='username']").val();
							let password = $("input[name='password']").val();
							Meteor.loginWithPassword(username, password);
						}}
					>
						Login
					</Button>
					<Button
						type="button"
						onClick={() => {
							FlowRouter.go('/register');
						}}
					>
						Register
					</Button>
				</Form>
			</div>
		);
	}

	componentDidUpdate() {
		if (Meteor.user() !== null) {
			FlowRouter.go('/');
		}
	}

}
