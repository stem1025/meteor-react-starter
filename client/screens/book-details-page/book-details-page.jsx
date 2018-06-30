import React from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';
import { books_db } from "../../../shared/collections/books";
import { Files } from "../../../shared/collections/files";

export class BookDetailsPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			img: "",
			author: "",
			details: "",
			price: 0
		}
	}

	render() {
		return (
			<div>
				<Item.Group>
					<Item>
						<Item.Image
							size='medium'
							src={this.state.img}
						/>
						<Item.Content>
							<Item.Header>
								{this.state.title}
							</Item.Header>
							<Item.Meta>
								{this.state.author}
							</Item.Meta>
							<Item.Description>
								{this.state.details}
							</Item.Description>
							<Item.Extra>
								price: {this.state.price}
							</Item.Extra>
							<Button
								secondary
								animated='vertical'
							>
								<Button.Content
									hidden
								>
									Buy
								</Button.Content>
								<Button.Content
									visible
								>
									<Icon
										name='shop'
									/>
								</Button.Content>
							</Button>
						</Item.Content>
					</Item>
				</Item.Group>
			</div>
		);
	}

	componentDidMount() {
		this.refresher();
	}

	componentDidUpdate() {
		this.refresher();
	}

	refresher() {
		let book = books_db.findOne({
			_id: this.props.params._id
		});
		if (book) {
			let src = "/res/img/generic-image.png";
			let file = Files.findOne({
				_id: book['Cover']
			});
			if (file) {
				src = file.link();
			}
			if (this.state.title !== book['Title']) {
				this.setState({
					title: book['Title']
				});
			}
			if (this.state.img !== src) {
				this.setState({
					img: src
				});
			}
			if (this.state.author !== book['Author']) {
				this.setState({
					author: book['Author']
				});
			}
			if (this.state.details !== book['Details']) {
				this.setState({
					details: book['Details']
				});
			}
			if (this.state.price !== book['Price']) {
				this.setState({
					price: book['Price']
				});
			}
		}
	}

}
