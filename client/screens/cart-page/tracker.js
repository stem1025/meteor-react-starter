import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { CartPage } from "./cart-page";
import { books_db } from "/shared/collections/books";
import { carts_db } from "/shared/collections/carts";

export const CartPageTracker = withTracker(() => {
	Meteor.subscribe('books_db');
	Meteor.subscribe('carts_db');
	return {
		Meteor: {
			collection: {
				books: books_db.find().fetch(),
				carts: carts_db.find().fetch()
			},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(CartPage);
