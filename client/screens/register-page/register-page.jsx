import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

export class RegisterPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			message_text: "",
			message_visible: false
		}
	}

	render() {
		return (
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
						full name
					</label>
					<input
						name="full name"
						placeholder="example: Johnny Appleseed"
					/>
				</Form.Field>
				<Form.Field>
					<label>
						address
					</label>
					<input
						name="address"
						placeholder="example: 4 / F Morlite Building No. 40 Hung To Road Hong Kong"
					/>
				</Form.Field>
				<Form.Field>
					<label>
						phone no
					</label>
					<input
						name="phone no"
						placeholder="31388829"
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
				<Form.Field>
					<label>
						repeat password
					</label>
					<input
						name="repeat password"
						placeholder="example: 12345678"
					/>
				</Form.Field>
				<Button
					type="button"
					onClick={() => {
						this.setState({
							message_text: "",
							message_visible: false
						});
						let username = $("input[name='username']").val();
						let full_name = $("input[name='full name']").val();
						let address = $("input[name='address']").val();
						let phone_no = $("input[name='phone no']").val();
						let password = $("input[name='password']").val();
						let repeat_password = $("input[name='repeat password']").val();
						if (Meteor.users.findOne({username: username})) {
							this.setState({
								message_text: "User exist",
								message_visible: true
							});
						}
						else if (username === "") {
							this.setState({
								message_text: "Your username cannot be empty.",
								message_visible: true
							});
						}
						else if (phone_no === "") {
							this.setState({
								message_text: "Your phone number cannot be empty.",
								message_visible: true
							});
						}
						else if (address === "") {
							this.setState({
								message_text: "Your address cannot be empty.",
								message_visible: true
							});
						}
						else if (full_name === "") {
							this.setState({
								message_text: "Your name cannot be empty.",
								message_visible: true
							});
						}
						else if (password === "") {
							this.setState({
								message_text: "Your password cannot be empty.",
								message_visible: true
							});
						}
						else if (repeat_password === "") {
							this.setState({
								message_text: "Your repeated password cannot be empty.",
								message_visible: true
							});
						}
						else if (password !== repeat_password) {
							this.setState({
								message_text: "Your password has to be identical",
								message_visible: true
							});
						} else {
							Accounts.createUser({
								username: username,
								password: password,
								profile: {
									name: full_name,
									address: address,
									phone: phone_no
								}
							});
						}
					}}
				>
					Register
				</Button>
				<Message
					error
					visible={this.state.message_visible}
					header='Error'
					content={this.state.message_text}
				/>
			</Form>
		);
	}

	componentDidUpdate() {
		if (Meteor.user() !== null) {
			FlowRouter.go('/');
		}
	}

}
