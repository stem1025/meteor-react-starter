import React from 'react';
import { Button, Icon, Input, Table, Segment } from 'semantic-ui-react';
import { carts_db } from "../../../shared/collections/carts";
import { books_db } from "../../../shared/collections/books";
import { HeaderComponent } from "../../components/header-component/header-component";

export class CartPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<HeaderComponent/>
				<Table
					celled
					padded
				>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>
								Book Title
							</Table.HeaderCell>
							<Table.HeaderCell>
								Unit Price
							</Table.HeaderCell>
							<Table.HeaderCell>
								Quantity
							</Table.HeaderCell>
							<Table.HeaderCell>
								Sub Total
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{
							carts_db.find({
								CustomerID: Meteor.userId()
							}).fetch().map((item, index) => {
								let book = books_db.findOne({
									_id: item['Bid']
								});
								return (
									<React.Fragment
										key={index}
									>
										<Table.Row>
											<Table.Cell>
												{book['Title']}
											</Table.Cell>
											<Table.Cell>
												{book['Price']}
											</Table.Cell>
											<Table.Cell>
												<Input
													readOnly
													type="text"
													value={item['Quantity']}
												/>
												<Button.Group>
													<Button
														icon
														onClick={() => {
															carts_db.update({
																_id: item['_id']
															}, {
																$set: {
																	Quantity: item['Quantity'] + 1
																}
															});
														}}
													>
														<Icon
															name="thumbs up"
														/>
													</Button>
													<Button
														icon
														onClick={() => {
															if (item['Quantity'] !== 1) {
																carts_db.update({
																	_id: item['_id']
																}, {
																	$set: {
																		Quantity: item['Quantity'] - 1
																	}
																});
															} else {
																carts_db.remove({
																	_id: item['_id']
																});
															}
														}}
													>
														<Icon
															name="thumbs down"
														/>
													</Button>
												</Button.Group>
											</Table.Cell>
											<Table.Cell>
												{book['Price'] * item['Quantity']}
											</Table.Cell>
										</Table.Row>
									</React.Fragment>
								);
							})
						}
					</Table.Body>
				</Table>
				<Segment floated='right'>
					<Input
						readOnly
						action={{
							color: 'pink',
							labelPosition: 'left',
							icon: 'shopping basket',
							content: 'Checkout'
						}}
						actionPosition='left'
						placeholder='Search...'
						value={
							parseFloat(carts_db.find({
								CustomerID: Meteor.userId()
							}).fetch().reduce((total, item) => {
								let book = books_db.findOne({
									_id: item['Bid']
								});
								return total + book['Price'] * item['Quantity'];
							}, 0)).toFixed(2)
						}
					/>
				</Segment>
			</div>
		);
	}

	componentDidMount() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			FlowRouter.go('/login');
		}
	}

	componentDidUpdate() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			FlowRouter.go('/login');
		}
	}

}
