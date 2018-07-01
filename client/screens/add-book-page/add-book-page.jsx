import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { FilesComponentContainerTracker } from "../../components/files-component/tracker";
import { books_db } from "../../../shared/collections/books";
import { HeaderComponent } from "../../components/header-component/header-component";

export class AddBookPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cover: []
		};
		this.elements = {};
	}

	render() {
		return (
			<div>
				<HeaderComponent/>
				<Form>
					<Form.Field>
						<label>
							Title
						</label>
						<input
							name="title"
						/>
					</Form.Field>
					<Form.Field>
						<label>
							Author
						</label>
						<input
							name="author"
						/>
					</Form.Field>
					<Form.Field>
						<label>
							Price
						</label>
						<input
							name="price"
						/>
					</Form.Field>
					<Form.Field>
						<label>
							Quantity
						</label>
						<input
							name="quantity"
						/>
					</Form.Field>
					<Form.Field>
						<label>
							Details
						</label>
						<input
							name="details"
						/>
					</Form.Field>
					<Input
						readOnly
						action={(
							<Button
								onClick={() => {
									this.elements.files.show();
								}}
							>
								add a cover
							</Button>
						)}
						value={this.state.cover}
					/>
				</Form>
				<Button
					primary
					onClick={() => {
						let title = $("input[name='title']").val();
						let author = $("input[name='author']").val();
						let price = $("input[name='price']").val();
						let quantity = $("input[name='quantity']").val();
						let details = $("input[name='details']").val();
						let cover = this.state.cover[0];
						books_db.insert({
							Title: title,
							Cover: cover,
							Price: parseFloat(price),
							Author: author,
							Details: details,
							Quantity: parseInt(quantity)
						});
						FlowRouter.go('/books');
					}}
				>
					Submit
				</Button>
				<FilesComponentContainerTracker
					files={this.state.cover}
					onMount={(c) => {
						this.elements.files = c;
					}}
					onRemove={(file) => {
						this.setState({
							cover: []
						})
					}}
					onUpload={(file) => {
						this.setState({
							cover: [
								file
							]
						});
					}}
				/>
			</div>
		);
	}

	componentDidMount() {
		if (!Meteor.loggingIn() && !Roles.userIsInRole(Meteor.userId(), ['administrator'])) {
			FlowRouter.go('/');
		}
	}

	componentDidUpdate() {
		if (!Meteor.loggingIn() && !Roles.userIsInRole(Meteor.userId(), ['administrator'])) {
			FlowRouter.go('/');
		}
	}

}
