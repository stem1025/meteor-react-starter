import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { books_db } from "/shared/collections/books";
import { Files } from "../../../shared/collections/files";

export class BooksPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Card.Group>
				{
					books_db.find().fetch().map((item, index) => {
						let Title = item['Title'];
						let Cover = item['Cover'];
						let Price = item['Price'];
						let Author = item['Author'];
						let Quantity = item['Quantity'];
						let file = Files.findOne({
							_id: Cover
						});
						let src = "/res/img/generic-image.png";
						if (file) {
							src = file.link();
						}
						return (
							<React.Fragment
								key={index}
							>
								<Card>
									<Image
										src={src}
									/>
									<Card.Content>
										<Card.Header>
											<a
												href={"/books/" + item['_id']}
											>
												{Title}
											</a>
										</Card.Header>
										<Card.Meta>
											{Author}
										</Card.Meta>
										<Card.Description>
											Price: {Price}
										</Card.Description>
									</Card.Content>
									<Card.Content
										extra
									>
										in stock: {Quantity}
									</Card.Content>
								</Card>
							</React.Fragment>
						);
					})
				}
			</Card.Group>
		);
	}

}
