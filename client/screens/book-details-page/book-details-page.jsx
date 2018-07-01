import React from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';
import { books_db } from "../../../shared/collections/books";
import { Files } from "../../../shared/collections/files";
import { carts_db } from "../../../shared/collections/carts";
import { HeaderComponent } from "../../components/header-component/header-component";

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
				<HeaderComponent/>
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
							{
								(() => {
									if (Meteor.user()) {
										return (
											<Button
												secondary
												animated='vertical'
												onClick={() => {
													let cart = carts_db.findOne({
														CustomerID: Meteor.userId(),
														Bid: this.props.params._id
													});
													if (!cart) {
														carts_db.insert({
															CustomerID: Meteor.userId(),
															Bid: this.props.params._id,
															Quantity: 1
														});
													}
												}}
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
										);
									} else {
										return null;
									}
								})()
							}
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
